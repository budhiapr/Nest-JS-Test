import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma.services';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService,PrismaService,JwtStrategy, UsersService],
  imports:[
    UsersModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret:process.env.JWT_SECRET || 'mysecret',
      signOptions:{
        expiresIn:process.env.JWT_EXPIRES_IN || '1h'
      },
    }),
  ]
})

export class AuthModule {}
