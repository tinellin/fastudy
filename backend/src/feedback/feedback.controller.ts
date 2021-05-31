import { Controller, Post, Body } from '@nestjs/common';
import { FeedbackService, Feedbacks } from './feedback.service';
import { Feedback } from 'src/db/entities/feedback.entity';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post('/create')
  async createFeedback(@Body() feedback): Promise<Feedback> {
    return this.feedbackService.createFeedback(feedback);
  }

  @Post('/getAll')
  async getAllFeedbacks(@Body() data): Promise<Feedbacks> {
    return this.feedbackService.getAllFeedbacks(data);
  }
}
