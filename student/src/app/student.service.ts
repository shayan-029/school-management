import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
