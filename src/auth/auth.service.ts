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
   let refreshToken = "";
  
   const users = await this.prisma.user.findUniqueOrThrow({
    where:{
      username
    }
   });

   const payload = {
    id:users.id,
    username:users.username,
    name:users.name,
    roleId:users.roleId
   }


   const validatepPassword = await bcrypt.compare(password,users.password)
   if(!validatepPassword){
    throw new NotFoundException('Invalid Password');
   }

   if(users.refreshToken == null){
    refreshToken = this.jwtService.sign(payload,{ expiresIn: '14d' })

    await this.prisma.user.update({
      data:{
        refreshToken:refreshToken
      },
      where:{
        id: users.id
      }
     });
   }

   return {
    ...payload,
    token: this.jwtService.sign(payload),
    refreshToken : refreshToken
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
