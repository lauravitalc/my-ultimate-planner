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
    if (event.checked) {
      this.selection = [...this.dataSource];
    } else {
      this.selection = [];
    }
  }

  checkRow(row: Task) {
    const index = this.selection.indexOf(row);
    if (index === -1) {
      this.selection.push(row);
    } else {
      this.selection.splice(index, 1);
    }
  }

  isAllSelected() {
    return this.selection.length === this.dataSource.length;
  }
}
