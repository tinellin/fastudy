import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from 'src/db/entities/video.entity';
import { Repository } from 'typeorm';
import { address, readTmpFile, removeTmpFile } from '../multer/multerUtils';
import * as fs from 'fs';

export type Videos = {
  pages: number;
  videos: Video[];
};

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video) public readonly videoRepo: Repository<Video>,
  ) {}

  async uploadVideo(data): Promise<Video> {
    let video: Video;
    let thumbnail: string;
    let upload: string;
    let names: any;
    let j = -1;
    let material = [];

    video = readTmpFile(data);
    names = video.material;

    address.map((item, i) => {
      if (item.type === 'thumbnails') {
        thumbnail = address[i].path;
      } else if (item.type === 'materials') {
        j++;
        material[j] = {
          path: address[i].path,
          name: names[i].editedName ? names[i].editedName : names[i].name,
        };
      } else if (item.type === 'uploads') {
        upload = address[i].path;
      }
    });

    video = this.videoRepo.create({
      title: video.title,
      thumbnail,
      description: video.description,
      user: video.user,
      subject: video.subject,
      material,
      video: upload,
    });

    //removeTmpFile(data);

    return this.videoRepo.save(video);
  }

  //Retorna os vídeos dada uma especifíca matéria.
  async getAllVideo({ subjectId, page, qty, search }): Promise<Videos> {
    const perPage = qty === 3 ? qty : 8;
    const skip = perPage * page - perPage;
    let videoQuery;
    let videos;

    const query = await this.videoRepo
      .createQueryBuilder('video')
      .select([
        'video.id',
        'video.title',
        'video.description',
        'video.thumbnail',
        'video.material',
        'video.video',
        'user.username',
      ])
      .innerJoin('video.user', 'user')
      .where('video.subject = :subjectId', { subjectId });

    if (!search) {
      videoQuery = await query
        .limit(perPage)
        .offset(skip)
        .getManyAndCount();
    } else {
      videoQuery = await query
        .where('article.subject = :subjectId', { subjectId })
        .andWhere('video.title ILIKE :search', { search: `%${search}%` })
        .orWhere('user.username ILIKE :search', { search: `%${search}%` })
        .limit(perPage)
        .offset(skip)
        .getManyAndCount();
    }

    videos = videoQuery[0];

    const pages = Math.ceil(videoQuery[1] / perPage);

    return { pages, videos };
  }

  async downloadMaterial(material: string): Promise<any> {
    const split = material.split('/');
    const file = await fs.readFileSync(
      `/home/tinelli/Fastudy/backend/files/videos/materials/${split[6]}`,
    );
    return file;
  }
}
