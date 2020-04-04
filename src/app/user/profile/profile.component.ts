import { Component, AfterViewInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { User } from '../models/user';
import { UserState } from '../state/user.state';
import { UserActions } from '../state/user.actions';
import { AchievementType } from '../../achievement/enums/achievement-type';

@Component({
  selector: 'sl-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit {

  public user: User;

  constructor(
    private store: Store,
  ) {
    this.store.select(UserState.activeUser).subscribe(u => this.user = u)
  }

  public ngAfterViewInit(): void {
    if (!this.user.achievements.find(a => a.id === AchievementType.VISIT_PROFILE_PAGE)) {
      this.store.dispatch(new UserActions.EarnAchievement(AchievementType.VISIT_PROFILE_PAGE))
    }
  }

}
