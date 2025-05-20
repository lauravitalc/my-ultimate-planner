import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../../services/task.service';
@Component({
  selector: 'app-tasks-input',
  standalone: false,
  templateUrl: './tasks-input.component.html',
  styleUrl: './tasks-input.component.scss',
})
export class TasksInputComponent {
  @Output() taskCreated = new EventEmitter<any>();
    
  taskForm: FormGroup;
  
  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      taskDescription: ['', [Validators.required, Validators.minLength(3)]],
      status: ['pending', [Validators.required]],
    });
  }
  
  onSubmit(): void {
    if (this.taskForm.valid) {
      this.taskCreated.emit(this.taskForm.value);
      this.taskForm.reset({ status: 'pending' });
    }
  }
}
