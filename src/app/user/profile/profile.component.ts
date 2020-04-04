import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { User } from '../models/user';
import { UserState } from '../state/user.state';

@Component({
  selector: 'sl-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  public user: User;

  constructor(private store: Store) {
    this.store.select(UserState.activeUser).subscribe(u => this.user = u)
  }

}
