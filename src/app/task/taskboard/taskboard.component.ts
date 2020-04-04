import { Component, OnInit } from '@angular/core';
import {TaskGroup} from "../model/task-group";
import {TaskGroupService} from "../service/task-group.service";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'sl-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {

  private _taskGroups: BehaviorSubject<TaskGroup[]> = new BehaviorSubject<TaskGroup[]>([]);

  public readonly taskGroups$: Observable<TaskGroup[]> = this._taskGroups.asObservable();

  constructor(private taskGroupService: TaskGroupService) {
    this.taskGroupService.getTaskGroups().subscribe((taskgroups: TaskGroup[]) => this._taskGroups.next(taskgroups));
  }

  ngOnInit(): void {
  }

}
