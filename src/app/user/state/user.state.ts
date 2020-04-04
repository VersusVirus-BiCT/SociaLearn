import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UserStateModel } from '../models/user-state-model';
import { UserActions as UA } from './user.actions';
import { patch, insertItem } from '@ngxs/store/operators';
import { User } from '../models/user';

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

  @Action(UA.Login)
  public login(ctx: StateContext<UserStateModel>, { user }: UA.Login): void {
    ctx.setState(patch({
      activeUser: user
    }));
  }

  @Action(UA.EarnAchievement)
  public earnAchievement(ctx: StateContext<UserStateModel>, { achievement }: UA.EarnAchievement): void {
    ctx.setState(patch({
      activeUser: patch({
        achievements: insertItem(achievement)
      })
    }));
  }

}
