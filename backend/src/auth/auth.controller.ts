import { LocalStrategy } from './strategies/local.strategy';
import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {
  constructor(private readonly localStrategy: LocalStrategy) {}

  @UseGuards(AuthGuard('local'))
  @Post('/auth')
  async login(@Request() req) {
    return this.localStrategy.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/verify')
  getToken(@Request() req) {
    return req.user;
  }
}
