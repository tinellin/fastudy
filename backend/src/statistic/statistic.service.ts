import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Statistic } from 'src/db/entities/statistic.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StatisticService {
  public constructor(
    @InjectRepository(Statistic)
    private readonly statisticRepo: Repository<Statistic>,
  ) {}

  async saveStatistics(statistic: Statistic) {
    const { correct, wrong, user } = statistic;

    const id = await this.statisticRepo.findOne({ where: { user: user } });

    if (!id) {
      const data = this.statisticRepo.create({
        done: +1,
        correct,
        wrong,
        user,
      });
      await this.statisticRepo.save(data);
    } else {
      this.statisticRepo
        .createQueryBuilder()
        .update(Statistic)
        .set({
          done: () => 'done + 1',
          correct: () => `correct + ${correct}`,
          wrong: () => `wrong + ${wrong}`,
        })
        .where('user = :user', { user })
        .execute();
    }

    return statistic;
  }

  async getStatistics(user): Promise<Statistic> {
    const statistic = await this.statisticRepo.findOne({
      where: { user: user.id },
    });
    return statistic;
  }
}
