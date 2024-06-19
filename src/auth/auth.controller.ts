import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Request, Response } from 'express';
import { JwtAuthGuard } from './jwt.guard';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Req() request:Request, @Res() response:Response, @Body() loginAuthDto:LoginAuthDto):Promise<any>{
    try {
      const result = await this.authService.login(loginAuthDto);
      return response.status(200).json({
        status: 'OK',
        message: 'Login Successfully',
        result:result
      })
    } catch (error) {
      return response.status(500).json({
        status: 'Error',
        message: `${error}`,
      })
    }
  }
}
