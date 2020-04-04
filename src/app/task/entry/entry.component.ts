import {Component, OnInit} from '@angular/core';
import {TaskGroupService} from '../service/task-group.service';
import {TaskTypeService} from '../service/task-type.service';
import {TaskGroup} from '../model/task-group';
import {TaskType} from '../model/task-type';
import {Task} from '../model/task';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'sl-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  public taskGroupId: number;
  public user = {role: 'school'};
  public taskGroup: TaskGroup;
  public taskTypes: TaskType[];

  constructor(private route: ActivatedRoute, taskGroupService: TaskGroupService, taskTypeService: TaskTypeService) {
    this.taskGroupId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    taskGroupService.loadTaskGroups();
    taskTypeService.loadTaskTypes();
    taskGroupService.taskGroups$.subscribe((taskGroups : TaskGroup[]) => {
      this.taskGroup = taskGroups.find(tt => tt.id === this.taskGroupId);
    });
    taskTypeService.taskTypes$.subscribe((taskTypes: TaskType[]) => {
      this.taskTypes = taskTypes;
    })
  }

  public ngOnInit(): void {
  }

  public taskTypeChange(taskTypeId: number, task: Task): void {
    task.type = this.taskTypes.find(tt => tt.id === taskTypeId);
    task.solution = null;
  }
}

