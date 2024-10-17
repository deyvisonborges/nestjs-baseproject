import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskRepository } from './task.repository';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TaskRepository) {}

  create(createTaskDto: CreateTaskDto) {
    return this.tasksRepository.createTag(createTaskDto);
  }

  findAll() {
    return this.tasksRepository.findAll();
  }

  findOne(id: number) {
    return this.tasksRepository.findById(String(id));
  }
}
