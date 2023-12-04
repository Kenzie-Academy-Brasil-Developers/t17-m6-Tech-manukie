import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Contact } from './entities/contact.entity';
import { CreateContactDTO } from './dto/create-contact.dto';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateContactDto } from './dto/update-contact.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  async create(createContactDTO: CreateContactDTO, userId: string) {
    const contact = new Contact();
    Object.assign(contact, {
      ...createContactDTO,
    });

    const newContact = await this.prisma.contact.create({
      data: {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        description: contact.description,
        joined_at: contact.joined_at,
        userId,
      },
    });
    return newContact;
  }

  async findOne(id: string) {
    const contact = await this.prisma.contact.findFirst({
      where: { id },
    });
    return contact;
  }

  async findAll() {
    const contacts = await this.prisma.contact.findMany();
    return contacts;
  }

  async remove(id: string) {
    const contact = await this.prisma.contact.findUnique({
      where: { id },
    });
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }
    await this.prisma.contact.delete({ where: { id } });
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const contact = await this.prisma.contact.findUnique({
      where: { id },
    });
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }
  
    const updatedContact = await this.prisma.contact.update({
      where: { id },
      data: { ...updateContactDto },
    });
  
    return plainToInstance(Contact, updatedContact);
  }  
}