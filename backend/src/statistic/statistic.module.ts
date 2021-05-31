import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Statistic } from 'src/db/entities/statistic.entity';
import { StatisticController } from './statistic.controller';
import { StatisticService } from './statistic.service';

@Module({
  imports: [TypeOrmModule.forFeature([Statistic])],
  controllers: [StatisticController],
  providers: [StatisticService],
})
export class StatisticModule {}
