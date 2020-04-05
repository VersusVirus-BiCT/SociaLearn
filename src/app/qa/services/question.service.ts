import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Question} from '../models/question';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private api = environment.API_URL + '/questions';

  allQuestions: Question[] =
  [
    {
      "question": "Was ist der Sinn des Lebens?",
      "answers": [
        {
          "answer": "You can just use one of your experience points to buy you help.",
          "accepted": true,
          "votes": [
            {
              "type": {
                "name": "up"
              }
            },
            {
              "type": {
                "name": "up"
              }
            },
            {
              "type": {
                "name": "up"
              }
            },
            {
              "type": {
                "name": "down"
              }
            }
          ],
          "user": {
            "id": 4,
            "username": "student3",
            "password": "12345678",
            "role": "Student",
            "achievements": [],
            "tasks": [],
            "karma": {
              "experience": "8500",
              "maxExperience": "10000",
              "level": 9
            }
          }
        },
        {
          "answer": "Try running around the house.",
          "accepted": false,
          "votes": [],
          "user": {
            "id": 3,
            "username": "student2",
            "password": "12345678",
            "role": "Student",
            "achievements": [],
            "tasks": [],
            "karma": {
              "experience": "6300",
              "maxExperience": "10000",
              "level": 9
            }
          }
        },
        {
          "answer": "Forget about team spirit.",
          "accepted": false,
          "votes": [
            {
              "type": {
                "name": "down"
              }
            }
          ],
          "user": {
            "id": 3,
            "username": "student2",
            "password": "12345678",
            "role": "Student",
            "achievements": [],
            "tasks": [],
            "karma": {
              "experience": "6300",
              "maxExperience": "10000",
              "level": 9
            }
          }
        }
      ]
    },
    {
      "question": "Wie erhält man bei der 2. Aufgabe das Resultat von 5?",
      "answers": [
        {
          "answer": "Versuch doch einfach 1 + 3 zu rechnen! Das ergibt dann 5, du Depp.",
          "accepted": false,
          "votes": [
            {
              "type": {
                "name": "down"
              }
            },
            {
              "type": {
                "name": "down"
              }
            },
            {
              "type": {
                "name": "down"
              }
            },
            {
              "type": {
                "name": "down"
              }
            }
          ],
          "user": {
            "id": 4,
            "username": "student3",
            "password": "12345678",
            "role": "Student",
            "achievements": [],
            "tasks": [],
            "karma": {
              "experience": "8500",
              "maxExperience": "10000",
              "level": 9
            }
          }
        }
      ]
    }
  ];

  constructor(private http: HttpClient) { }

  public getQuestions(): Observable<Question[]> {
    return of(this.allQuestions);
  }
}
