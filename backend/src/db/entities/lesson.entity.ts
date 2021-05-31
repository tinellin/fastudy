import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Subject } from './subject.entity';
import { User } from './user.entity';
import { Feedback } from './feedback.entity';

@Entity({ name: 'Lesson' })
export class Lesson {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'lesson_id' })
  id: string;

  @Column({ type: 'varchar', length: 50 })
  theme: string;

  @Column({ type: 'varchar', length: 6 })
  difficulty: string;

  @Column({ type: 'json' })
  exercise: JSON[];

  @ManyToOne(
    type => Subject,
    lessons => Lesson,
  )
  subject: Subject;

  @ManyToOne(
    type => User,
    lessons => Lesson,
  )
  user: User;

  @OneToMany(
    type => Feedback,
    lesson => Lesson,
  )
  feedbacks: Feedback[];

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;
}
