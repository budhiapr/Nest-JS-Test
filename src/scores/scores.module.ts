import { Module } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { ScoresController } from './scores.controller';
import { PrismaService } from 'src/prisma.services';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@Module({
  controllers: [ScoresController],
  providers: [ScoresService,PrismaService,JwtStrategy, JwtAuthGuard],
})
export class ScoresModule {}
