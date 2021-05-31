import {
  Controller,
  Post,
  Body,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { createFileName, saveFiles } from 'src/multer/multerUtils';
import { LessonService, TLesson, Lessons } from './lesson.service';

@Controller('lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Post('/create')
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'tmp' }, { name: 'imgs', maxCount: 30 }], {
      storage: diskStorage({
        destination: (req, file, cb) => {
          let path = { content: 'lessons', type: file.fieldname };
          saveFiles(req, file, cb, path);
        },
        filename: createFileName,
      }),
    }),
  )
  async createLesson(@UploadedFiles() data): Promise<TLesson> {
    return this.lessonService.createLesson(data);
  }

  @Post('/getAll')
  async getAllLessons(@Body() data): Promise<Lessons> {
    return this.lessonService.getAllLessons(data);
  }
}
