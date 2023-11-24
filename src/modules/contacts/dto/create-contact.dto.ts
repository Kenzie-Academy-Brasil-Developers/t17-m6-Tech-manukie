import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateContactDTO {
    @ApiProperty({
      description: 'Nome do contato',
      type: String,
      default: 'Ryomen Sukuna de Souza',
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
      description: 'E-mail do contato',
      type: String,
      default: 'ryomensukuna@hotmail.com',
    })
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({
      description: 'Número do contato',
      type: String,
    })
    @IsString()
    phone: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    profile_pic: string | null;
  }