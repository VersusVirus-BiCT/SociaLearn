import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {TaskGroup} from "../model/task-group";

@Injectable({
  providedIn: 'root'
})
export class TaskGroupService {

  private _taskGroups: BehaviorSubject<TaskGroup[]> = new BehaviorSubject<TaskGroup[]>([]);
  public readonly taskGroups$: Observable<TaskGroup[]> = this._taskGroups.asObservable();

  private _taskGroup: BehaviorSubject<TaskGroup> = new BehaviorSubject<TaskGroup>(new class implements TaskGroup {
    id: number;
    purpose: string;
    tasks: [];
    title: string;
  });
  public readonly taskGroup$: Observable<TaskGroup> = this._taskGroup.asObservable();

  constructor(private http: HttpClient) { }

  public loadTaskGroups(){
    this.http.get(environment.API_URL + "/taskgroup")
      .subscribe((taskgroups: TaskGroup[]) => this._taskGroups.next(taskgroups));
  }

  public loadTaskGroup(id: number){
    this.http.get(environment.API_URL + "/taskgroup/"+((id >= 0)?id:''))
      .subscribe((taskgroup: TaskGroup) => this._taskGroup.next(taskgroup));
  }

}
