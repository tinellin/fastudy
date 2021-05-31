import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Video } from 'src/db/entities/video.entity';
import { VideoService, Videos } from './video.service';
import { saveFiles, createFileName } from '../multer/multerUtils';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post('/upload')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'tmp', maxCount: 1 },
        { name: 'uploads', maxCount: 1 },
        { name: 'thumbnails', maxCount: 1 },
        { name: 'materials', maxCount: 5 },
      ],
      {
        storage: diskStorage({
          destination: (req, file, cb) => {
            let path = { content: 'videos', type: file.fieldname };
            saveFiles(req, file, cb, path);
          },
          filename: createFileName,
        }),
      },
    ),
  )
  async uploadVideo(@UploadedFiles() data): Promise<Video> {
    return this.videoService.uploadVideo(data);
  }

  @Post('/getAll')
  async getVideos(@Body() data): Promise<Videos> {
    return this.videoService.getAllVideo(data);
  }

  @Post('/getMaterial')
  async downloadMaterial(@Body() { material }): Promise<any> {
    return this.videoService.downloadMaterial(material);
  }
}
