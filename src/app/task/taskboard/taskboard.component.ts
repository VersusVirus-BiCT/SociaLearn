import { Component, OnInit } from '@angular/core';
import {TaskGroup} from "../model/task-group";
import {Task} from "../model/task";

@Component({
  selector: 'sl-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {

  private taskGroups: Array<TaskGroup>;

  constructor() {
    this.taskGroups = new Array<TaskGroup>();
    this.taskGroups.push(<TaskGroup> {id: 1, name: 'Test', purpose: 'Example', tasks: new Array<Task>()});
    this.taskGroups.push(<TaskGroup> {id: 2, name: 'Test2', purpose: 'Example', tasks: new Array<Task>()});
  }

  ngOnInit(): void {
  }

  public getTaskGroups(): Array<TaskGroup>{
    return this.taskGroups;
  }

}
