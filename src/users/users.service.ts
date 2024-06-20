import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.services';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(private prisma:PrismaService, private jwtService:JwtService){

  }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(request:Request,id: number) {

    const authHeader = request.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    const isVerify = await this.jwtService.verifyAsync(token);


   if(isVerify.roleId==2){
     throw new UnauthorizedException("Only admin can access this module");
   }

    return `This action returns a #${id} user: roleId: ${isVerify.roleId} username(from token):${isVerify.username} `;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
