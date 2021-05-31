import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from './../../db/entities/user.entity';
import { UserService } from './../../user/user.service';

import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {
    super();
  }

  async validate(email: string, password: string): Promise<User> {
    const user = await this.userService.getUser(email);

    if (!user)
      throw new HttpException(
        'O email inserido não esta cadastrado!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );

    if (bcrypt.compareSync(password, user.password)) {
      return user;
    }

    throw new HttpException(
      'O email ou senha inserido esta incorreto!',
      HttpStatus.UNAUTHORIZED,
    );
  }

  async login(user: User): Promise<any> {
    return {
      token: this.jwtService.sign({
        id: user.id,
        img: user.userImg,
        name: user.username,
        type: user.userType === 'teacher' ? true : false,
      }),
    };
  }
}
