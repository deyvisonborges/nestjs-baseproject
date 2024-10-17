import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskRepository } from './task.repository';

@Module({
  controllers: [TasksController],
  providers: [
    {
      provide: TaskRepository,
      useFactory: () => {
        return new TaskRepository();
      },
    },
    {
      provide: TasksService,
      useFactory: (tasksRepository: TaskRepository) => {
        return new TasksService(tasksRepository);
      },
      inject: [TaskRepository],
    },
  ],
})
export class TasksModule {}
