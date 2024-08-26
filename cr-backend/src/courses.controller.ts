import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(): any {
    return [
      { 
        id: '100',
        number : '123556',
        title : 'Meow maw'
      },
      { 
        id: '200',
        number : '1245356',
        title : 'AOUUU'
      },
      { 
        id: '4500',
        number : '168936',
        title : 'BUH JUH SUH'
      }
    ]
  }
}
