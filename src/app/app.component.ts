import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './user/services/user.service';
import { Store } from '@ngxs/store';
import { UserActions } from './user/state/user.actions';

@Component({
  selector: 'sl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private userService: UserService,
    private store: Store
  ) {
    this.translate.setDefaultLang('de');

    this.userService.getUser(1).subscribe(user => {
      this.store.dispatch(new UserActions.Login(user));
    });
  }
}
