import { Injectable } from '@nestjs/common';
import { Course } from './interfaces/course.interface';

@Injectable()
export class CoursesService {
  async findAll(): Promise<Course[]> {
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