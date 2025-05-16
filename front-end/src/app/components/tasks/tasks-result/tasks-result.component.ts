import { Component } from '@angular/core';

export interface Task {
  taskName: string;
  status: string;
  actions: string;
}
@Component({
  selector: 'app-tasks-result',
  standalone: false,
  templateUrl: './tasks-result.component.html',
  styleUrl: './tasks-result.component.scss',
})
export class TasksResultComponent {
  displayedColumns: string[] = ['select', 'name', 'status', 'actions'];

  dataSource: Task[] = [
    {
      taskName: 'Task 1',
      status: 'In Progress',
      actions: 'Edit',
    },
    {
      taskName: 'Task 2',
      status: 'In Progress',
      actions: 'Edit',
    },
  ];

  selection: Task[] = [];

  checkAllRows(event: any) {
    console.log(event);
    if (event.checked) {
      this.selection = [...this.dataSource];
    } else {
      this.selection = [];
    }
  }

  checkRow(row: Task) {
    console.log(row);
  }
}
