import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Achievement } from '../models/achievement';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {
  private api = environment.API_URL + '/achievements';

  constructor(private http: HttpClient) { }

  public getAchievements(): Observable<Achievement[]> {
    return this.http.get<Achievement[]>(this.api);
  }

  public getAchievement(id: number): Observable<Achievement> {
    return this.http.get<Achievement>(`${this.api}/${id}`);
  }
}
