import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from 'src/db/entities/lesson.entity';
import { FeedbackModule } from '../feedback/feedback.module';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson]), FeedbackModule],
  controllers: [LessonController],
  providers: [LessonService],
})
export class LessonModule {}
