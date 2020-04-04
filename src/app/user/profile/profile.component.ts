import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AchievementActions } from 'src/app/achievement/achievement.actions';
import { Achievement } from '../../achievement/achievement.model';
import { AchievementState } from '../../achievement/achievement.state';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserState } from '../state/user.state';

@Component({
  selector: 'sl-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  public user: User;

  @Select(AchievementState.achievements)
  public achievements$: Observable<Achievement[]>;

  constructor(private store: Store) {
    this.store.select(UserState.activeUser).subscribe(u => this.user = u)
  }

  public onGiveAchievement(): void {
    const a = { title: 'test achievement' };
    this.store.dispatch(new AchievementActions.AddAchievement(a));
  }

}
