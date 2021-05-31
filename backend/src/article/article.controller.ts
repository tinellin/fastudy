import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { Article } from 'src/db/entities/article.entity';
import { createFileName, saveFiles } from 'src/multer/multerUtils';
import { ArticleService, Articles } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('/create')
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'tmp' }, { name: 'imgs' }], {
      storage: diskStorage({
        destination: (req, file, cb) => {
          let path = { content: 'articles', type: file.fieldname };
          saveFiles(req, file, cb, path);
        },
        filename: createFileName,
      }),
    }),
  )
  async createArticle(@UploadedFiles() data): Promise<Article> {
    return this.articleService.createArticle(data);
  }

  @Post('/getAll')
  async getAllArticles(@Body() data): Promise<Articles> {
    return this.articleService.getAllArticles(data);
  }
}
