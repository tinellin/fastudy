import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Article } from './article.entity';
import { Lesson } from './lesson.entity';
import { Video } from './video.entity';

@Entity({ name: 'Subjects' })
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(
    type => Video,
    subject => Subject,
  )
  videos: Video[];

  @OneToMany(
    type => Article,
    subject => Subject,
  )
  articles: Article[];

  @OneToMany(
    type => Lesson,
    subject => Subject,
  )
  lessons: Lesson[];

  @Column({
    type: 'varchar',
    length: 30,
  })
  subjects: string;
}
