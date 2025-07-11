import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  private tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks.push(task);
  }
  
  getTasks(): Task[] {
    return this.tasks;
  }
}
