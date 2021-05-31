import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from 'src/db/entities/feedback.entity';

export interface IData {
  userId: number;
  subjectId: number;
  page: number;
  qty: number;
  search: string;
}

export type Feedbacks = {
  pages: number;
  feedbacks: Feedback[];
};

@Injectable()
export class FeedbackService {
  public constructor(
    @InjectRepository(Feedback)
    private readonly feedbackRepo: Repository<Feedback>,
  ) {}

  async createFeedback(feedback: Feedback): Promise<Feedback> {
    const feedbackCreated = this.feedbackRepo.create({
      answers: feedback.answers,
      userId: feedback.userId,
      lesson: feedback.lesson,
    });

    await this.feedbackRepo.save(feedbackCreated);
    return feedbackCreated;
  }

  async getAllFeedbacks(data: IData): Promise<Feedbacks> {
    const { userId, subjectId } = data;

    const perPage = data.qty;
    const skip = perPage * data.page - perPage;

    const feedbacks = await this.feedbackRepo
      .createQueryBuilder('feedback')
      .select([
        'feedback.userId',
        'feedback.lesson',
        'lesson.id',
        'lesson.subject',
        'lesson.theme',
        'lesson.difficulty',
        'lesson.exercise',
        'feedback.answers',
        'user.username',
      ])
      .innerJoin('feedback.lesson', 'lesson')
      .innerJoin('lesson.user', 'user')
      .where('feedback.userId = :userId', { userId })
      .andWhere('lesson.subject = :subjectId', { subjectId })
      .limit(perPage)
      .offset(skip)
      .getMany();

    const counter = await this.feedbackRepo.count({
      where: { subject: subjectId },
    });

    const pages = Math.ceil(counter / perPage);

    return { pages, feedbacks };
  }

  async filteredFeedbacks(data: IData): Promise<Feedback[]> {
    const { userId, subjectId } = data;

    const feedback = await this.feedbackRepo
      .createQueryBuilder('feedback')
      .select(['feedback.id', 'feedback.lesson'])
      .innerJoinAndSelect('feedback.lesson', 'lesson')
      .where('feedback.userId = :userId', { userId })
      .andWhere('lesson.subject = :subjectId', { subjectId })
      .getMany();

    return feedback;
  }
}
