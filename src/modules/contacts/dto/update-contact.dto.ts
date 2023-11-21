import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDTO } from './create-contact.dto';

export class UpdateContactDto extends PartialType(CreateContactDTO) {}
