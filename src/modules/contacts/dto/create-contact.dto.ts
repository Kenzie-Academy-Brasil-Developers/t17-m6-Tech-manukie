import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

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

    @ApiProperty({
      description: 'Descrição sobre o contato',
      type: String,
    })
    @IsString()
    @MaxLength(120)
    @IsOptional()
    description: string | null;
  }