import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/database/prisma.service';
import { v2 as cloudinary } from 'cloudinary';
import { unlink } from 'node:fs';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  
  async create(createUserDto: CreateUserDto) {
    const findUser = await this.prisma.user.findFirst({
      where: { email: createUserDto.email },
    });

    if (findUser) {
      throw new ConflictException('User already exists');
    }
    const user = new User();
    Object.assign(user, {
      ...createUserDto,
    });
    await this.prisma.user.create({
      data: { ...user },
    });
    return plainToInstance(User, user);
  }

  async findAll() {
    const findUsers = await this.prisma.user.findMany();
    return plainToInstance(User, findUsers);
  }

  async findByEmail(email: string) {
    const findUser = await this.prisma.user.findFirst({
      where: { email },
    });

    return findUser;
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    console.log(user);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return plainToInstance(User, user);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: { ...updateUserDto },
    });

    return plainToInstance(User, updatedUser);
  }

  async remove(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.prisma.user.delete({ where: { id } });
  }

  async upload(
    profile_pic: Express.Multer.File,
    userId: string,
  ) {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    const uploadImage = await cloudinary.uploader.upload(
      profile_pic.path,
      { resource_type: 'image' },
      (error, result) => {
        return result;
      },
    );

    const updateUserPic = await this.prisma.user.update({
      where: { id: userId },
      data: { profile_pic: uploadImage.secure_url, }
    });

    unlink(profile_pic.path, (error) => {
      if (error) console.log(error);
    });
    return updateUserPic;
  }
}