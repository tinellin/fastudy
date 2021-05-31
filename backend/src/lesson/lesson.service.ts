import { Injectable } from '@nestjs/common';
import { Lesson } from 'src/db/entities/lesson.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/db/entities/user.entity';
import { IData, FeedbackService } from '../feedback/feedback.service';
import { address, readTmpFile, removeTmpFile } from 'src/multer/multerUtils';

interface IExercises {
  title: string;
  question: string;
  img: boolean;
  opcionalQuestion: string;
  correct: string;
  answers: string[];
}

export type TLesson = { type: Lesson; exercises: IExercises[]; id: User };

export type Lessons = {
  pages: number;
  lessons: Lesson[];
};

@Injectable()
export class LessonService {
  public constructor(
    @InjectRepository(Lesson) public readonly lessonRepo: Repository<Lesson>,
    private readonly feedbackService: FeedbackService,
  ) {}

  async createLesson(data): Promise<TLesson> {
    let lesson: TLesson;
    let lessonMounted = [];
    let lessonCreated;
    let i = -1;

    lesson = readTmpFile(data);

    lesson.exercises.map(exercise => {
      //Verifica se a posição contém uma imagem, caso tenha, acessa o array address e coloca o end. da imagem.
      if (exercise.img) ++i;
      lessonMounted.push({
        title: exercise.title,
        question: exercise.question,
        img: exercise.img ? address[i] : '',
        opcionalQuestion: exercise.opcionalQuestion,
        correct: exercise.correct,
        answers: exercise.answers,
      });
    });

    lessonCreated = this.lessonRepo.create({
      user: lesson.id,
      subject: lesson.type.subject,
      theme: lesson.type.theme,
      difficulty: lesson.type.difficulty,
      exercise: lessonMounted,
    });

    //removeTmpFile(data);

    await this.lessonRepo.save(lessonCreated);
    return lessonCreated;
  }

  async getAllLessons(data: IData): Promise<Lessons> {
    const { subjectId } = data;
    const perPage = data.qty;
    const skip = perPage * data.page - perPage;
    let allLessons;

    const filter = await this.feedbackService.filteredFeedbacks(data);

    //Retorna as lições dada uma especifíca matéria.
    const query = await this.lessonRepo
      .createQueryBuilder('lesson')
      .select([
        'lesson.id',
        'lesson.theme',
        'lesson.difficulty',
        'lesson.exercise',
        'user.username',
      ])
      .innerJoin('lesson.user', 'user')
      .where('lesson.subject = :subjectId', { subjectId });

    if (!data.search) {
      allLessons = await query.getMany();
    } else {
      allLessons = await query
        .where('article.subject = :subjectId', { subjectId })
        .andWhere('lesson.theme ILIKE :search', { search: `%${data.search}%` })
        .orWhere('user.username ILIKE :search', { search: `%${data.search}%` })
        .getMany();
    }

    //Filtrar as lições apresentando apenas as não feitas
    allLessons.map((lesson, i) => {
      filter.map(feedback => {
        const { id } = feedback.lesson;
        if (lesson.id === id) {
          allLessons.splice(i, 1);
        }
      });
    });

    const lessons = allLessons.slice(skip, perPage + skip);
    const pages = Math.ceil(allLessons.length / perPage);

    return { pages, lessons };
  }
}
