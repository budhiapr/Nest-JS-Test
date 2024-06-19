import { Injectable, Req } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { PrismaService } from 'src/prisma.services';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ScoresService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

   async create(@Req() request:Request, createScoreDto: CreateScoreDto){
    const authHeader = request.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    const isValidatedToken = this.jwtService.verify(token);

    if(isValidatedToken){
      const isAdmin = await this.prisma.user.findFirst({
        where:{
          id:createScoreDto.userId
        }
      });

      if(isAdmin?.roleId == 1){
        return this.prisma.score.create({
          data:{
            score:createScoreDto.score,
            userId:createScoreDto.userId
          }
        });
      }else{
        return this.prisma.score.create({
          data:{
            score:createScoreDto.score,
            userId:isAdmin?.id
          }
        });
      }
    }
    
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
