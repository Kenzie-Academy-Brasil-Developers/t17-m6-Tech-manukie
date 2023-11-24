import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
    @ApiProperty({
      description: 'E-mail do usuário',
      type: String,
      default: 'satorugojo@gmail.com'
    })
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({
      description: 'Senha do usuário',
      type: String,
      default: '123456789'
    })
    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    password: string;
  }