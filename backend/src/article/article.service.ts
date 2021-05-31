import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from 'src/db/entities/article.entity';
import { address, readTmpFile, removeTmpFile } from 'src/multer/multerUtils';
import * as fs from 'fs';
import { Repository } from 'typeorm';

export type Articles = {
  pages: number;
  articles: Article[];
};

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepo: Repository<Article>,
  ) {}

  async createArticle(data): Promise<Article> {
    let article: Article;
    let words = 0;
    let i = -1;

    article = readTmpFile(data);

    article.content.map(article => {
      if (article.type === 'image') {
        ++i;
        article.content = address[i].path;
      }
      if (article.type === 'text') {
        let split = article.content.split(' ');
        words += Math.ceil(split.length / 200);
      }
    });

    const articleCreated = this.articleRepo.create({
      title: article.title,
      subtitle: article.subtitle,
      content: article.content,
      readingTime: words,
      subject: article.subject,
      user: article.user,
    });

    //removeTmpFile(data);

    return this.articleRepo.save(articleCreated);
  }

  async getAllArticles({ subjectId, page, qty, search }): Promise<Articles> {
    const perPage = qty;
    const skip = perPage * page - perPage;
    let articleQuery;

    //Retorna os artigos dada uma especifíca matéria.
    const query = await this.articleRepo
      .createQueryBuilder('article')
      .select([
        'article.id',
        'article.title',
        'article.subtitle',
        'article.content',
        'article.readingTime',
        'user.username',
      ])
      .innerJoin('article.user', 'user')
      .where('article.subject = :subjectId', { subjectId });

    if (!search) {
      articleQuery = await query
        .limit(perPage)
        .offset(skip)
        .getManyAndCount();
    } else {
      articleQuery = await query
        .where('article.subject = :subjectId', { subjectId })
        .andWhere('article.title ILIKE :search', { search: `%${search}%` })
        .orWhere('user.username ILIKE :search', { search: `%${search}%` })
        .limit(perPage)
        .offset(skip)
        .getManyAndCount();
    }

    const pages = Math.ceil(articleQuery[1] / perPage);

    let articles = articleQuery[0];

    return { pages, articles };
  }
}
