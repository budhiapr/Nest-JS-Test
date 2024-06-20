import { Injectable, Req, Res } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { PrismaService } from 'src/prisma.services';
import { JwtService } from '@nestjs/jwt';
import {Request, Response} from 'express';


@Injectable()
export class ScoresService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

   async create(@Req() request:Request, @Res() response:Response, createScoreDto: CreateScoreDto){
    const authHeader = request.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    const isValidatedToken = this.jwtService.verify(token);

    const user = await this.prisma.user.findUnique({
      where:{
        id:createScoreDto.userId
      }
    })

    const created = this.prisma.score.create({
          data:{
            score:createScoreDto.score,
            userId:(isValidatedToken.roleId==1 ? createScoreDto.userId: isValidatedToken.id)
          }
        });

    if(created){
        return response.status(201).json({
          status:'OK!',
          message:'Score has been created',
          data:{
            name:(isValidatedToken.roleId==1 ? user.name : isValidatedToken.name),
            username:(isValidatedToken.roleId==1 ? user.username: isValidatedToken.username),
            score:createScoreDto.score,
            createdBy:isValidatedToken.username
          }
        })
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
