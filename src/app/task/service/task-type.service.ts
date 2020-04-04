import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TaskType} from '../model/task-type';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskTypeService {

  public _taskTypes: BehaviorSubject<TaskType[]> = new BehaviorSubject<TaskType[]>([]);
  public readonly taskTypes$: Observable<TaskType[]> = this._taskTypes.asObservable();

  private _taskType: BehaviorSubject<TaskType> = new BehaviorSubject<TaskType>(new class implements TaskType {
    public id: number;
    public name: string;
  });
  public readonly taskType$: Observable<TaskType> = this._taskType.asObservable();

  constructor(private http: HttpClient) { }

  public loadTaskTypes() {
    this.http.get(environment.API_URL + '/tasktype')
      .subscribe((taskTypes: TaskType[]) => this._taskTypes.next(taskTypes));
  }

  public loadTaskType(id: number){
    this.http.get(environment.API_URL + '/tasktype/'+ id)
      .subscribe((taskTypes: TaskType) => this._taskType.next(taskTypes));
  }
}
