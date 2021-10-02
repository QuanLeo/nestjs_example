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
import { CaslAbilityFactory } from './casl/casl-ability.factory';
import { Action } from './users/action.enum';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access_token')
  @Get()
  getHello(@Request() request: any) {
    const ability = this.caslAbilityFactory.createForUser(request.user);
    const canRead = ability.can(Action.Create, 'all');
    console.log(canRead);
    return `hello user ${request.user.name}`;
  }

  @Post('login')
  login(@Body() basicAuthDto: BasicAuthDto) {
    return this.authService.login(basicAuthDto); //TODO : test sign access_token : ok
  }
}
