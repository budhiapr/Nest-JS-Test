import { Injectable } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { PrismaService } from 'src/prisma.services';
import { randomUUID } from 'crypto';

@Injectable()
export class ScoresService {
  constructor(private prisma:PrismaService){

  }

   create(createScoreDto: CreateScoreDto){
    return this.prisma.score.create({
      data:{
        id:createScoreDto.id,
        score:createScoreDto.score,
        userId:createScoreDto.userId
      }
    });
    
  }

  findAll() {
    return this.prisma.score.findMany();
  }

  
  findOne(id: number) {
    return `This action returns a #${id} score`;
  }

  update(id: number, updateScoreDto: UpdateScoreDto) {
    return `This action updates a #${id} score`;
  }

  remove(id: number) {
    return `This action removes a #${id} score`;
  }
}
