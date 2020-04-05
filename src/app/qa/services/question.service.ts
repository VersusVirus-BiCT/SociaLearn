import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Question} from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  public allQuestions: Question[] =[
    {
      'question': 'What is the meaning of life?',
      'answers': [
        {
          'answer': 'You can just use one of your experience points to buy you help.',
          'accepted': true,
          'votes': [
            {
              'type': {
                'name': 'up'
              }
            },
            {
              'type': {
                'name': 'up'
              }
            },
            {
              'type': {
                'name': 'up'
              }
            },
            {
              'type': {
                'name': 'down'
              }
            }
          ],
          'user': {
            'id': 4,
            'username': 'student3',
            'role': 'Student',
            'achievements': [],
            'tasks': [],
            'karma': {
              'experience': 8500,
              'maxExperience': 10000,
              'level': 9
            }
          }
        },
        {
          'answer': 'Try running around the house.',
          'accepted': false,
          'votes': [],
          'user': {
            'id': 3,
            'username': 'student2',
            'role': 'Student',
            'achievements': [],
            'tasks': [],
            'karma': {
              'experience': 6300,
              'maxExperience': 10000,
              'level': 9
            }
          }
        },
        {
          'answer': 'Forget about team spirit.',
          'accepted': false,
          'votes': [
            {
              'type': {
                'name': 'down'
              }
            }
          ],
          'user': {
            'id': 3,
            'username': 'student2',
            'role': 'Student',
            'achievements': [],
            'tasks': [],
            'karma': {
              'experience': 6300,
              'maxExperience': 10000,
              'level': 9
            }
          }
        }
      ]
    },
    {
      'question': 'How do you get the result of 5 for the 2nd task?',
      'answers': [
        {
          'answer': 'Just try to calculate 1 + 3! That makes 5, you idiot.',
          'accepted': false,
          'votes': [
            {
              'type': {
                'name': 'down'
              }
            },
            {
              'type': {
                'name': 'down'
              }
            },
            {
              'type': {
                'name': 'down'
              }
            },
            {
              'type': {
                'name': 'down'
              }
            }
          ],
          'user': {
            'id': 4,
            'username': 'student3',
            'role': 'Student',
            'achievements': [],
            'tasks': [],
            'karma': {
              'experience': 8500,
              'maxExperience': 10000,
              'level': 9
            }
          }
        }
      ]
    }
  ];

  constructor() { }

  public getQuestions(): Observable<Question[]> {
    return of(this.allQuestions);
  }
}
