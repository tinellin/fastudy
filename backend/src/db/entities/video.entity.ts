import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

import { User } from './user.entity';
import { Subject } from './subject.entity';

@Entity({ name: 'Video' })
export class Video {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id_video' })
  id: number;

  @Column({ type: 'varchar' })
  thumbnail: string;

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'varchar', length: 1000 })
  description: string;

  @Column({ type: 'json' })
  material: [JSON];

  @Column({ type: 'varchar' })
  video: string;

  @ManyToOne(
    type => User,
    videos => videos,
  )
  user: User;

  @ManyToOne(
    type => Subject,
    videos => videos,
  )
  subject: Subject;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;
}
