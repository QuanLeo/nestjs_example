import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { BasicAuthDto } from './entities/basic-auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(user: any) {
    const payload = { id: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
