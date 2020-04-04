import { Component, OnInit } from '@angular/core';
import {TaskGroupService} from '../service/task-group.service';

@Component({
  selector: 'sl-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {

  constructor(public readonly taskGroupService: TaskGroupService) {
    this.taskGroupService.loadTaskGroups();
  }



  public ngOnInit(): void {
  }

}
