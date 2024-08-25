import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('hello')
  getHello(): string {
    return 'hello';
  }
}
