import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { BasicAuthDto } from './entities/basic-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}

  async validateUser(basicAuthDto: BasicAuthDto) {
    const user = this.userService.findByEmail(basicAuthDto.email);

    if (user && (await user).password === basicAuthDto.password) {
      return user;
    }

    throw new UnauthorizedException();
  }

  async login(basicAuthDto: BasicAuthDto) {
    const user = await this.validateUser(basicAuthDto);
    const payload = { id: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
