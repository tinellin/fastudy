import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from 'src/db/entities/video.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Video])],
  providers: [VideoService],
  controllers: [VideoController],
})
export class VideoModule {}
