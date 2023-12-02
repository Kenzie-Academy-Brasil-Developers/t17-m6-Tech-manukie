import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({
      description: 'Nome do usuário',
      type: String,
      default: 'Satoru Gojo da Silva',
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
      description: 'E-mail do usuário',
      type: String,
      default: 'satorugojo@gmail.com',
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
    @Transform(({ value }: { value: string }) => hashSync(value, 10), {
      groups: ['transform'],
    })
    password: string;

    @ApiProperty({
      description: 'Número do usuário',
      type: String,
    })
    @IsString()
    phone: string;
  }