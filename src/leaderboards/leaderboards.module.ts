import { Module } from '@nestjs/common';
import { LeaderboardsService } from './leaderboards.service';
import { LeaderboardsController } from './leaderboards.controller';
import { PrismaService } from 'src/prisma.services';

@Module({
  controllers: [LeaderboardsController],
  providers: [LeaderboardsService, PrismaService],
})
export class LeaderboardsModule {}
