import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ScoresModule } from './scores/scores.module';
import { PrismaService } from './prisma.services';
import { LeaderboardsModule } from './leaderboards/leaderboards.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, ScoresModule, LeaderboardsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
