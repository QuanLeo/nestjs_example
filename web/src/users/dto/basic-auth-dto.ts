import { IsEmail, IsString } from 'class-validator';

export class BasicAuthDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;
}
