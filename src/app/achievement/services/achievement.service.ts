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
      title: 'First lession learned',
      icon: 'grade',
    },
    {
      id: 2,
      title: 'Visit profile page',
      icon: 'account_circle',
    },
    {
      id: 3,
      title: 'Find yourself in the leaderboard',
      icon: 'visibility',
    }
  ];

  public getAchievements(): Observable<Achievement[]> {
    return of(this.achievements);
  }

  public getAchievement(id: number): Observable<Achievement> {
    return of(this.achievements.find(a => a.id === id));
  }
}
