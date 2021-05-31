import { secretKey } from './key';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';

import { UserModule } from './../user/user.module';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: secretKey,
      signOptions: { expiresIn: '86400s' },
    }),
  ],
  providers: [LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
