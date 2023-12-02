import { randomUUID } from 'node:crypto';

export class Contact {
  readonly id: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  joined_at: Date;
  
  constructor() {
    this.id = randomUUID();
  }
}