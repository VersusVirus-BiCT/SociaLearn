import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {TaskGroup} from '../model/task-group';

@Injectable({
  providedIn: 'root'
})
export class TaskGroupService {

  private _taskGroups: BehaviorSubject<TaskGroup[]> = new BehaviorSubject<TaskGroup[]>([]);
  public readonly taskGroups$: Observable<TaskGroup[]> = this._taskGroups.asObservable();

  private _taskGroup: BehaviorSubject<TaskGroup> = new BehaviorSubject<TaskGroup>(new class implements TaskGroup {
    public id: number;
    public purpose: string;
    public tasks: [];
    public title: string;
  });
  public readonly taskGroup$: Observable<TaskGroup> = this._taskGroup.asObservable();

  constructor(private http: HttpClient) { }

  public loadTaskGroups(): void{
    this.http.get(environment.API_URL + '/taskgroup')
      .subscribe((taskgroups: TaskGroup[]) => this._taskGroups.next(taskgroups));
  }

  public loadTaskGroup(id: number): void{
    this.http.get(environment.API_URL + '/taskgroup/'+((id >= 0)?id:''))
      .subscribe((taskgroup: TaskGroup) => this._taskGroup.next(taskgroup));
  }

  public storeTaskGroup(taskGroup: TaskGroup): void{
    this.http.put(environment.API_URL+'/taskgroup/' + taskGroup.id, taskGroup).subscribe(
      o => console.log(taskGroup,o)
    );
  }
}
