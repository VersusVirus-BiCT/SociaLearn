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
      'purpose': 'Math Aufgaben Einfach',
      'tasks': [
        {
          'id': 3,
          'name': 'Subtraktion 1',
          'description': 'Löse die Subtraktion',
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
          'name': 'Addition 2',
          'description': 'Löse die Addition',
          'question': '23+7',
          'solution': [
            {
              'id': 1,
              'value': 'A',
              'correct': true
            },
            {
              'id': 2,
              'value': 'B',
              'correct': false
            },
            {
              'id': 3,
              'value': 'C',
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
          'name': 'Addition 1',
          'description': 'Löse die Addition',
          'question': '5+7',
          'solution': [
            {
              'id': 1,
              'value': 'A',
              'correct': true
            },
            {
              'id': 2,
              'value': 'B',
              'correct': true
            },
            {
              'id': 3,
              'value': 'C',
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
      'purpose': 'Java Aufgaben Einfach',
      'tasks': [
        {
          'id': 4,
          'name': 'Java Variablen',
          'description': 'Beantworte die Frage',
          'question': 'Was ist eine Variable',
          'solution': 'Ein Platzhalter für Werte',
          'points': 1,
          'type': {
            'id': 4,
            'name': 'Text',
            'solutionType': 'text'
          }
        },
        {
          'id': 5,
          'name': 'Java Keywords',
          'description': 'Beantworte die Frage',
          'question': 'Was bedeutet static',
          'solution': [
            {
              'id': 1,
              'value': 'A',
              'correct': true
            },
            {
              'id': 2,
              'value': 'B',
              'correct': false
            },
            {
              'id': 3,
              'value': 'C',
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
          'name': 'Java Prinzipien',
          'description': 'Beantworte die Frage',
          'question': 'Wofür steht OO',
          'solution': [
            {
              'id': 1,
              'value': 'A',
              'correct': true
            },
            {
              'id': 2,
              'value': 'B',
              'correct': false
            },
            {
              'id': 3,
              'value': 'C',
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
  ]

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
