import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {TaskType} from '../model/task-type';

@Injectable({
  providedIn: 'root'
})
export class TaskTypeService {

  public _taskTypes: BehaviorSubject<TaskType[]> = new BehaviorSubject<TaskType[]>([]);
  public readonly taskTypes$: Observable<TaskType[]> = this._taskTypes.asObservable();

  private _taskType: BehaviorSubject<TaskType> = new BehaviorSubject<TaskType>(new class implements TaskType {
    public id: number;
    public name: string;
    public solutionType: string;
  });
  public readonly taskType$: Observable<TaskType> = this._taskType.asObservable();

  public allTaskTypes: TaskType[] =
  [
    {
      'id': 1,
      'name': 'Multiple Choice',
      'solutionType': 'checkbox'
    },
    {
      'id': 2,
      'name': 'Single Choice Radio',
      'solutionType': 'radio'
    },
    {
      'id': 3,
      'name': 'Single Choice Select',
      'solutionType': 'select'
    },
    {
      'id': 4,
      'name': 'Text',
      'solutionType': 'text'
    }
  ];

  constructor() { }

  public loadTaskTypes(): void {
    of(this.allTaskTypes)
      .subscribe((taskTypes: TaskType[]) => this._taskTypes.next(taskTypes));
  }

  public loadTaskType(id: number): void {
    of(this.allTaskTypes[id -1])
      .subscribe((taskTypes: TaskType) => this._taskType.next(taskTypes));
  }
}
