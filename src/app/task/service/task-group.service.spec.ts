import { TestBed } from '@angular/core/testing';

import { TaskGroupService } from './task-group.service';

describe('TaskGroupService', () => {
  let service: TaskGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
