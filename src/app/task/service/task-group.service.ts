import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {TaskGroup} from '../model/task-group';

@Injectable({
  providedIn: 'root'
})
export class TaskGroupService {


  public alltaskgroups: TaskGroup[] = [
    {
      'id': 1,
      'title': 'Math',
      'purpose': 'Math exercises easy',
      'tasks': [
        {
          'id': 3,
          'name': 'Subtraction 1',
          'description': 'Solve the subtraction',
          'question': '23-8',
          'solution': '15',
          'points': 1,
          'type': {
            'id': 4,
            'name': 'Text',
            'solutionType': 'text'
          }
        },
        {
          'id': 2,
          'name': 'Addition 1',
          'description': 'Solve the addition',
          'question': '23+7',
          'solution': [
            {
              'id': 1,
              'value': '30',
              'correct': true
            },
            {
              'id': 2,
              'value': '31',
              'correct': false
            },
            {
              'id': 3,
              'value': '29',
              'correct': false
            }
          ],
          'points': 1,
          'type': {
            'id': 2,
            'name': 'Single Choice',
            'solutionType': 'select'
          }
        },
        {
          'id': 1,
          'name': 'Prime numbers',
          'description': 'Which numbers are prime numbers?',
          'question': '5*7',
          'solution': [
            {
              'id': 1,
              'value': '7',
              'correct': true
            },
            {
              'id': 2,
              'value': '17',
              'correct': true
            },
            {
              'id': 3,
              'value': '21',
              'correct': false
            }
          ],
          'points': 1,
          'type': {
            'id': 1,
            'name': 'Multiple Choice',
            'solutionType': 'checkbox'
          }
        }
      ]
    },
    {
      'id': 2,
      'title': 'Java',
      'purpose': 'Java exercises easy',
      'tasks': [
        {
          'id': 4,
          'name': 'Java variables',
          'description': 'Answer the question',
          'question': 'What is a variable?',
          'solution': [
            {
              'id': 1,
              'value': 'a function',
              'correct': false
            },
            {
              'id': 2,
              'value': 'a placeholder for data',
              'correct': true
            },
            {
              'id': 3,
              'value': 'an alias for loop',
              'correct': false
            }
          ],
          'points': 1,
          'type': {
            'id': 2,
            'name': 'Single Choice',
            'solutionType': 'select'
          }
        },
        {
          'id': 5,
          'name': 'Java keywords',
          'description': 'Answer the question',
          'question': 'What does int mean',
          'solution': [
            {
              'id': 1,
              'value': 'Non editable variable',
              'correct': false
            },
            {
              'id': 2,
              'value': 'Internal Server Error',
              'correct': false
            },
            {
              'id': 3,
              'value': 'Datatype',
              'correct': false
            }
          ],
          'points': 1,
          'type': {
            'id': 2,
            'name': 'Single Choice Radio',
            'solutionType': 'radio'
          }
        },
        {
          'id': 6,
          'name': 'Java principles',
          'description': 'Answer the question',
          'question': 'What does OOP mean',
          'solution': [
            {
              'id': 1,
              'value': 'Only Operators permitted',
              'correct': false
            },
            {
              'id': 2,
              'value': 'Object oriented programming',
              'correct': true
            },
            {
              'id': 3,
              'value': 'observable object principle',
              'correct': false
            }
          ],
          'points': 1,
          'type': {
            'id': 3,
            'name': 'Single Choice Select',
            'solutionType': 'select'
          }
        }
      ]
    }
  ];

  private _taskGroups: BehaviorSubject<TaskGroup[]> = new BehaviorSubject<TaskGroup[]>([]);
  public readonly taskGroups$: Observable<TaskGroup[]> = this._taskGroups.asObservable();

  private _taskGroup: BehaviorSubject<TaskGroup> = new BehaviorSubject<TaskGroup>(new class implements TaskGroup {
    public id: number;
    public purpose: string;
    public tasks: [];
    public title: string;
  });
  public readonly taskGroup$: Observable<TaskGroup> = this._taskGroup.asObservable();

  constructor() { }

  public loadTaskGroups(): void{
    of(this.alltaskgroups)
      .subscribe((taskgroups: TaskGroup[]) => this._taskGroups.next(taskgroups));
  }

  public loadTaskGroup(id: any): void{
    of(this.alltaskgroups[id -1])
    .subscribe((taskgroup: TaskGroup) => this._taskGroup.next(taskgroup));
  }

  public storeTaskGroup(taskGroup: TaskGroup): void{
    this.alltaskgroups[taskGroup.id - 1] = taskGroup;
  }

  public createTaskGroup(taskGroup: TaskGroup): void {
    this.alltaskgroups.push(taskGroup);
  }

  public deleteTaskGroup(taskGroup: TaskGroup): void {
    this.alltaskgroups.splice(taskGroup.id - 1, 1);
  }
}
