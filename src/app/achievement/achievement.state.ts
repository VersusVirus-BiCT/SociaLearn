import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { AchievementStateModel, Achievement } from './achievement.model';
import { AchievementActions } from './achievement.actions';
import { insertItem, patch } from '@ngxs/store/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
@State<AchievementStateModel>({
  name: 'achievementState',
  defaults: {
    achievements: []
  }
})
export class AchievementState implements NgxsOnInit {

  @Selector()
  public static achievements(state: AchievementStateModel): Achievement[] {
    return state.achievements;
  }

  constructor(private http: HttpClient) { }

  public ngxsOnInit(ctx: StateContext<AchievementStateModel>): void {
    this.http.get(environment.API_URL + '/achievements').subscribe((achievements: Achievement[]) => {
      ctx.setState(patch<AchievementStateModel>({
        achievements: achievements
      }));
    });
  }

  @Action(AchievementActions.AddAchievement)
  public addAchievement(ctx: StateContext<AchievementStateModel>, action: AchievementActions.AddAchievement): void {
    ctx.setState(patch({
      achievements: insertItem(action.achievement)
    }));
  }

}
