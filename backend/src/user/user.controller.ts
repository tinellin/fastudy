import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { User } from './../db/entities/user.entity';
import { UserService, ILocation } from './user.service';
import { diskStorage } from 'multer';
import { createFileName, saveFiles } from 'src/multer/multerUtils';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async signup(@Body() payload: User): Promise<User> {
    return this.userService.createUser(payload);
  }

  @Post('/verifyPassword')
  async verifyPassword(@Body() data): Promise<any> {
    return this.userService.verifyPassword(data);
  }

  @Post('/saveLocation')
  async sendLocation(@Body() data: ILocation): Promise<User> {
    return this.userService.sendLocation(data);
  }

  @Post('/getLocation')
  async getLocation(@Body() user: JSON): Promise<ILocation> {
    return this.userService.getLocation(user);
  }

  @Post('/createdAt')
  async getCreatedAt(@Body() user: JSON): Promise<string> {
    return this.userService.getCreatedAt(user);
  }

  @Post('/changeImg')
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'imgs', maxCount: 1 }], {
      storage: diskStorage({
        destination: (req, file, cb) => {
          const path = { content: 'users', type: file.fieldname };

          saveFiles(req, file, cb, path);
        },
        filename: createFileName,
      }),
    }),
  )
  async changeUserImg(@UploadedFiles() files, @Body() data): Promise<User> {
    return this.userService.changeUserImg(data);
  }

  @Post('/changePsw')
  async updatePassword(@Body() data): Promise<User> {
    return this.userService.updatePassword(data);
  }
}
