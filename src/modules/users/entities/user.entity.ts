import { randomUUID } from 'node:crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  joined_at: Date;

  constructor() {
    this.id = randomUUID();
  }
}