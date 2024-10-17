import { Task } from './entities/task.entity';

export class TaskRepository {
  private tasks: (Task & { id?: string })[] = [];

  createTag(task: Task) {
    this.tasks.push(task);
  }

  findById(id: string): Task | null {
    return this.tasks.find((task) => task.id === id);
  }

  findAll() {
    return this.tasks;
  }
}
