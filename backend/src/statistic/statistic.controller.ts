import { Controller, Post, Body } from '@nestjs/common';
import { Statistic } from 'src/db/entities/statistic.entity';
import { StatisticService } from './statistic.service';

@Controller('statistic')
export class StatisticController {
  public constructor(private readonly statisticService: StatisticService) {}

  @Post('/save')
  async saveStatistics(@Body() statistic: Statistic): Promise<Statistic> {
    return this.statisticService.saveStatistics(statistic);
  }

  @Post('/get')
  async getStatistics(@Body() user): Promise<Statistic> {
    return this.statisticService.getStatistics(user);
  }
}
