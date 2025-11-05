import { Controller, Get } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller()
export class StudentController {
  constructor(private readonly appService: StudentService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
