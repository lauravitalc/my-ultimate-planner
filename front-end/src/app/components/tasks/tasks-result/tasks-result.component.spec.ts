import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksResultComponent } from './tasks-result.component';

describe('TasksResultComponent', () => {
  let component: TasksResultComponent;
  let fixture: ComponentFixture<TasksResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
