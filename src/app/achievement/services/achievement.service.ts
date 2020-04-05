import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { Achievement } from '../models/achievement';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {
  private api = environment.API_URL + '/achievements';

  constructor(private http: HttpClient) { }

  allAchievments: Achievement[] = [
    {
      "id": 1,
      "title": "First lession learned"
    },
    {
      "id": 2,
      "title": "Visit profile page"
    },
    {
      "id": 3,
      "title": "Find yourself in the leaderboard"
    }
  ];

  public getAchievements(): Observable<Achievement[]> {
    return of(this.allAchievments);
  }

  public getAchievement(id: number): Observable<Achievement> {
    let objArray: Achievement[] = this.allAchievments.filter(it => {
      return it.id == id;
    });
    let obj: Achievement = objArray[0];
    return of(obj)
    ;
  }
}
