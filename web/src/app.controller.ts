import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';
import { BasicAuthDto } from './auth/entities/basic-auth.dto';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access_token')
  @Get()
  getHello(@Request() request: any) {
    return 'hello world';
    //return request.user; //requred Bearer token, validate tokem
  }

  @Post('login')
  login(@Body() basicAuthDto: BasicAuthDto) {
    return this.authService.login(basicAuthDto); //TODO : test sign access_token : ok
  }
}
