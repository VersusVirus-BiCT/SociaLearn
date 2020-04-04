import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AchievementActions } from 'src/app/achievement/achievement.actions';
import { Achievement } from '../../achievement/achievement.model';
import { AchievementState } from '../../achievement/achievement.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'sl-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  @Select(AchievementState.achievements)
  public achievements$: Observable<Achievement[]>;

  constructor(private store: Store) { }

  public onGiveAchievement(): void {
    const a = { title: 'test achievement' };
    this.store.dispatch(new AchievementActions.AddAchievement(a));
  }

}
