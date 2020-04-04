import { Achievement } from './../../achievement/models/achievement';
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UserStateModel } from '../models/user-state-model';
import { UserActions as UA } from './user.actions';
import { patch, insertItem } from '@ngxs/store/operators';
import { User } from '../models/user';
import { AchievementService } from '../../achievement/services/achievement.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
@State<UserStateModel>({
  name: 'user',
  defaults: {
    activeUser: null,
  }
})
export class UserState {

  @Selector()
  public static activeUser(state: UserStateModel): User {
    return state.activeUser;
  }

  constructor(
    private achievementService: AchievementService
  ) { }

  @Action(UA.Login)
  public login(ctx: StateContext<UserStateModel>, { user }: UA.Login): void {
    ctx.setState(patch({
      activeUser: user
    }));
  }

  @Action(UA.EarnAchievement, { cancelUncompleted: true })
  public earnAchievement(ctx: StateContext<UserStateModel>, { type }: UA.EarnAchievement): Observable<Achievement> {
    // TODO: find a way to actually give back the achievement model
    return this.achievementService.getAchievement(type).pipe(tap(achievement => {
      ctx.setState(patch({
        activeUser: patch({
          achievements: insertItem(achievement)
        })
      }));
    }));
  }

}
