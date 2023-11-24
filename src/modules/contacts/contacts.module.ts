import { BadRequestException, Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { PrismaService } from 'src/database/prisma.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './tmp',
        filename: (_, file, cb) => {
          cb(null, file.originalname);
        },
      }),
      fileFilter: (_, file, cb) => {
        if (file.mimetype === 'image/jpeg') {
          cb(null, true);
        } else {
          cb(
            new BadRequestException('Only jpeg format allowed'),
            false,
          );
        }
      },
    }),
  ],
  controllers: [ContactsController],
  providers: [ContactsService,  PrismaService],
})
export class ContactsModule {}