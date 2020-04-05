import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskgroupDialogComponent } from './taskgroup-dialog.component';

describe('TaskgroupDialogComponent', () => {
  let component: TaskgroupDialogComponent;
  let fixture: ComponentFixture<TaskgroupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskgroupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskgroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
