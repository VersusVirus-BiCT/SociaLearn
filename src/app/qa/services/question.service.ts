import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from '../models/question';
import { USERS } from '../../app.mock';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  public allQuestions: Question[] = [
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
          user: USERS[3],
        },
        {
          'answer': 'Try running around the house.',
          'accepted': false,
          'votes': [],
          user: USERS[3],
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
          user: USERS[2],
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
          user: USERS[3],
        }
      ]
    }
  ];

  constructor() { }

  public getQuestions(): Observable<Question[]> {
    return of(this.allQuestions);
  }
}
