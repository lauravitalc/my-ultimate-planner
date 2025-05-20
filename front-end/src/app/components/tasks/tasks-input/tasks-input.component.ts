import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../../services/task.service';
@Component({
  selector: 'app-tasks-input',
  standalone: false,
  templateUrl: './tasks-input.component.html',
  styleUrl: './tasks-input.component.scss',
})
export class TasksInputComponent {
  taskForm: FormGroup;
  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      taskDescription: ['', [Validators.required]],
      status: [''],
    });
  }
  onSubmit(): void {
    if (this.taskForm.valid) {
      const newTask = this.taskForm.value;
      this.taskService.addTask(newTask);
      this.taskForm.reset();
    }
  }
}
