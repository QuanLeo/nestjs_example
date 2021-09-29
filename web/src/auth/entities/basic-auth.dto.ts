import { IsEmail, IsString } from 'class-validator';

export class BasicAuthDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
