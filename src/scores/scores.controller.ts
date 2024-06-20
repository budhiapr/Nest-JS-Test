import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, NestMiddleware, Req, Res } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { AuthMiddleware } from 'src/auth/auth.middleware';
import { Request,Response } from 'express';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  
  create(@Req() request:Request, @Res() response:Response, @Body() createScoreDto: CreateScoreDto) {
    return this.scoresService.create(request,response,createScoreDto);
  }

  @Get()
  findAll() {
    return this.scoresService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScoreDto: UpdateScoreDto) {
    return this.scoresService.update(+id, updateScoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scoresService.remove(+id);
  }
}
