import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Subject } from './subject.entity';
import { User } from './user.entity';

@Entity({ name: 'Article' })
export class Article {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id_article' })
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  subtitle: string;

  @Column({ type: 'json' })
  content: [{ type: string; content: '' }];

  @Column({ type: 'int', name: 'reading_time' })
  readingTime: number;

  @ManyToOne(
    type => Subject,
    articles => Article,
  )
  subject: Subject;

  @ManyToOne(
    type => User,
    articles => Article,
  )
  user: User;
}
