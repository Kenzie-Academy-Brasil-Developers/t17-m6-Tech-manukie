import { IsEmail, IsNotEmpty, IsString, IsDate, IsOptional} from 'class-validator';

export class CreateContactDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    phone: string;

    @IsDate()
    joined_at: Date;

    @IsString()
    @IsOptional()
    userId?: string;
  }