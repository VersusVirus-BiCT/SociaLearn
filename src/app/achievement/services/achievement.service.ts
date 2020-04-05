import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Achievement } from '../models/achievement';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {
  private achievements: Achievement[] = [
    {
      id: 1,
      title: 'First lession learned'
    },
    {
      id: 2,
      title: 'Visit profile page'
    },
    {
      id: 3,
      title: 'Find yourself in the leaderboard'
    }
  ];

  public getAchievements(): Observable<Achievement[]> {
    return of(this.achievements);
  }

  public getAchievement(id: number): Observable<Achievement> {
    return of(this.achievements.find(a => a.id === id));
  }
}
