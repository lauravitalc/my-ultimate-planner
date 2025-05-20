import { Component } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  tasks: Task[] = []

  addTask(task: Task) {
    this.tasks = [...this.tasks, task];
  }
}
