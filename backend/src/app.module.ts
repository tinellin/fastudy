import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { LessonModule } from './lesson/lesson.module';
import { FeedbackModule } from './feedback/feedback.module';
import { StatisticModule } from './statistic/statistic.module';
import { VideoModule } from './video/video.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    UserModule,
    LessonModule,
    FeedbackModule,
    StatisticModule,
    VideoModule,
    ArticleModule,
  ],
})
export class AppModule {}
