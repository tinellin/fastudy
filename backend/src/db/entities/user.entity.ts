import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Lesson } from './lesson.entity';
import { Feedback } from './feedback.entity';
import { Statistic } from './statistic.entity';
import { Video } from './video.entity';
import { Article } from './article.entity';

@Entity({ name: 'User' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id_user' })
  id: number;

  @Column({ type: 'varchar', name: 'user_type', length: 10 })
  userType: string;

  @Column({ type: 'varchar', length: 30 })
  username: string;

  @Column({ type: 'varchar', length: 30 })
  email: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @Column({ type: 'varchar', length: 2 })
  state: string;

  @Column({ type: 'varchar', length: 50 })
  city: string;

  @Column({ type: 'varchar', length: 50 })
  country: string;

  @Column({ type: 'varchar', name: 'user_img' })
  userImg: string;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @OneToMany(
    type => Video,
    user => User,
  )
  videos: Video[];

  @OneToMany(
    type => Article,
    user => User,
  )
  articles: Article[];

  @OneToMany(
    type => Lesson,
    user => User,
  )
  lessons: Lesson[];

  @OneToMany(
    type => Feedback,
    user => User,
  )
  feedbacks: Feedback[];

  @OneToOne(
    type => Statistic,
    userId => User,
  )
  statistic: Statistic;
}
