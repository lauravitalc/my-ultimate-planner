import { Component } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  tasks: Task[] = [];
  editIndex: number | null = null;
  editTask: Task | null = null;

  addTask(task: Task) {
    if (this.editIndex !== null) {
      this.tasks[this.editIndex] = task;
      this.editIndex = null;
      this.editTask = null;
      this.tasks = [...this.tasks];
    } else {
      this.tasks = [...this.tasks, task];
    }
  }

  startEdit(task: Task) {
    this.editIndex = this.tasks.indexOf(task);
    this.editTask = { ...task };
  }
}
