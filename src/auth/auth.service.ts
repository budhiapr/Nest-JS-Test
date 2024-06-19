import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma.services';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}
  

  async login(loginAuthDto:LoginAuthDto):Promise<any> {
   const {username, password} = loginAuthDto;

   const users = await this.prisma.user.findUnique({
    where:{
      username
    }
   });

   if(!users){
    throw new NotFoundException('User Not Found');
   }

   const validatepPassword = await bcrypt.compare(password,users.password)
   if(!validatepPassword){
    throw new NotFoundException('Invalid Password');
   }

   return {
    token: this.jwtService.sign({username})
   }

  }

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
