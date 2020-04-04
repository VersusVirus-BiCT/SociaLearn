import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../user/services/user.service';
import { User } from '../../user/models/user';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

interface SortedUser extends User {
  position: number;
}

@Component({
  selector: 'sl-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  @ViewChild(MatSort, { static: true })
  public sort: MatSort;

  public users: MatTableDataSource<SortedUser>;
  public columns: string[] = [
    'position',
    'username',
    'level',
    'experience',
    'achievements'
  ];

  constructor(private userService: UserService) { }

  public ngOnInit(): void {
    this.userService.getUsers().pipe(
      map(users => users.sort((prev, next) => {
        let sort = next.karma.level - prev.karma.level
        if (sort === 0) sort = next.karma.experience - prev.karma.experience;
        return sort;
      })),
      map(users => users.map<SortedUser>((user, idx) => ({ ...user, position: idx + 1 })))
    ).subscribe(users => {
      this.users = new MatTableDataSource(users);
      this.users.sort = this.sort;
    });
  }

}
