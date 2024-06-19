import { Injectable } from '@nestjs/common';
import { CreateLeaderboardDto } from './dto/create-leaderboard.dto';
import { UpdateLeaderboardDto } from './dto/update-leaderboard.dto';
import { PrismaService } from 'src/prisma.services';
import { Leaderboard } from './entities/leaderboard.entity';

@Injectable()
export class LeaderboardsService {
  constructor(private prisma:PrismaService){

  }
  
  create(createLeaderboardDto: CreateLeaderboardDto) {
    return 'This action adds a new leaderboard';
  }

  findAll() {
    return `This action returns all leaderboards`;
  }

  findTopTenHighScores():Promise<Leaderboard[]>{
    return this.prisma.score.findMany({
      select:{
        id:true,
        score:true,
        user:{
         select:{
          id:true,
          name:true
         }
        },
      },
      orderBy:{
        score:'desc',
      },
      where:{
        user:{
          roleId:2
        }
      },
      take:10
    });
  }


  findOne(id: number) {
    return `This action returns a #${id} leaderboard`;
  }

  update(id: number, updateLeaderboardDto: UpdateLeaderboardDto) {
    return `This action updates a #${id} leaderboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} leaderboard`;
  }
}
