import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Lesson } from './lesson.entity';

@Entity({ name: 'Feedback' })
export class Feedback {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id_feedback' })
  id: number;

  @Column({ type: 'simple-array' })
  answers: string[];

  @ManyToOne(
    type => User,
    feedbacks => feedbacks,
  )
  userId: User;

  @ManyToOne(
    type => Lesson,
    feedbacks => feedbacks,
  )
  lesson: Lesson;
}
