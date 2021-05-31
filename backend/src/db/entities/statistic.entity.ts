import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'Statistic' })
export class Statistic {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'int' })
  done: number;

  @Column({ type: 'int' })
  correct: number;

  @Column({ type: 'int' })
  wrong: number;

  @OneToOne(
    type => User,
    statistic => Statistic,
  )
  @JoinColumn()
  user: User;
}
