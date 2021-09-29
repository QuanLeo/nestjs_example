import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { BasicAuthDto } from './auth/entities/basic-auth.dto';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(@Request() request: any) {
    return request.user; //requred Bearer token, validate tokem
  }

  @Post('login')
  login(@Body() basicAuthDto: BasicAuthDto) {
    return this.authService.login(basicAuthDto); //TODO : test sign access_token : ok
  }
}
