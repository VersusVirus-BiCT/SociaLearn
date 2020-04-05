import { Component, OnInit } from '@angular/core';
import {TaskGroupService} from '../service/task-group.service';
import {Router} from '@angular/router';

@Component({
  selector: 'sl-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {

  constructor(public readonly taskGroupService: TaskGroupService, public router: Router) {
    this.taskGroupService.loadTaskGroups();
  }

  public add(): void{
    //this.taskGroupService.add();
  }

  public createTaskGroup(): void {
    this.router.navigate(['/task/entry']);
  }

  public ngOnInit(): void {
  }

}
