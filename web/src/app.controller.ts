import { Controller, Get, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Request() request: any) {
    return request.user; //requred Bearer token, validate tokem
  }

  @Post('login')
  login(@Request() request: any) {
    return { msg: 'login success' }; //TODO: return access_token
  }
}
