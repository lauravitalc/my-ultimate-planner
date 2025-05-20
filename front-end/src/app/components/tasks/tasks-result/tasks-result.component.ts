import { Component, Input } from '@angular/core';
import { Task } from '../../../models/task.model';
import { TaskService } from '../../../services/task.service';
@Component({
  selector: 'app-tasks-result',
  standalone: false,
  templateUrl: './tasks-result.component.html',
  styleUrl: './tasks-result.component.scss',
})
export class TasksResultComponent {
  @Input() tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  displayedColumns: string[] = [
    'select',
    'taskDescription',
    'status',
    'actions',
  ];
  selection: Task[] = [];

  checkAllRows(event: any) {
    if (event.checked) {
      this.selection = [...this.tasks];
    } else {
      this.selection = [];
    }
  }

  checkRow(row: Task, checked: boolean) {
    if (checked) {
      if (!this.selection.includes(row)) {
        this.selection.push(row);
      }
    } else {
      const index = this.selection.indexOf(row);
      if (index !== -1) {
        this.selection.splice(index, 1);
      }
    }
  }

  isAllSelected() {
    return this.selection.length === this.tasks.length;
  }
}
