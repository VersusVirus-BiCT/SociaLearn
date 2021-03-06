import { Injectable, NgZone } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UserStateModel } from '../models/user-state-model';
import { UserActions as UA } from './user.actions';
import { patch, insertItem } from '@ngxs/store/operators';
import { User } from '../models/user';
import { AchievementService } from '../../achievement/services/achievement.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../services/user.service';

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
    private achievementService: AchievementService,
    private zone: NgZone,
    private admiralSnackbar: MatSnackBar,
    private userService: UserService,
  ) { }

  @Action(UA.Login)
  public login(ctx: StateContext<UserStateModel>, { user }: UA.Login): void {
    ctx.setState(patch({
      activeUser: user
    }));
  }

  @Action(UA.EarnAchievement)
  public earnAchievement(ctx: StateContext<UserStateModel>, { type }: UA.EarnAchievement): void {
    this.achievementService.getAchievement(type).subscribe(achievement => {
      ctx.setState(patch({
        activeUser: patch({
          achievements: insertItem(achievement)
        })
      }));

      ctx.dispatch(new UA.SaveUser(ctx.getState().activeUser));

      // run in zone to position correctly
      this.zone.run(() => {
        this.admiralSnackbar.open('Achievement unlocked: ' + achievement.title, 'OK', { duration: 5000, });
      });
    });
  }

  @Action(UA.SaveUser)
  public saveUser(_: StateContext<UserStateModel>, { user }: UA.SaveUser): void {
    this.userService.putUser(user);
  }

}
