import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../user/services/user.service';
import { User } from '../../user/models/user';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngxs/store';
import { UserState } from '../../user/state/user.state';
import { UserActions } from 'src/app/user/state/user.actions';
import { AchievementType } from '../../achievement/enums/achievement-type';

interface SortedUser extends User {
  position: number;
}

@Component({
  selector: 'sl-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  public users: MatTableDataSource<SortedUser>;
  public columns: string[] = [
    'position',
    'username',
    'level',
    'experience',
    'achievements'
  ];

  @ViewChild(MatSort, { static: false })
  public set sort(sort: MatSort) {
    this.users.sort = sort;
  }

  constructor(
    private userService: UserService,
    private store: Store,
  ) { }

  public ngOnInit(): void {
    // get all users
    this.userService.getUsers().pipe(

      // sort users by karma
      map(users => users.sort((prev, next) => {
        let sort = next.karma.level - prev.karma.level
        if (sort === 0) sort = next.karma.experience - prev.karma.experience;
        return sort;
      })),

      // assign position number
      map(users => users.map<SortedUser>((user, idx) => ({ ...user, position: idx + 1 })))

      // add users into table
    ).subscribe(users => this.users = new MatTableDataSource(users));
  }

  public onUserClick(user: User): void {
    if (user.id === this.store.selectSnapshot(UserState.activeUser).id) {
      this.store.dispatch(new UserActions.EarnAchievement(AchievementType.FIND_IN_LEADERBOARD));
    }
  }

}
