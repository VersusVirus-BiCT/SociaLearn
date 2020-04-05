import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {UserService} from './user/services/user.service';
import {Store} from '@ngxs/store';
import {UserActions} from './user/state/user.actions';


@Component({
  selector: 'sl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private userService: UserService,
    private store: Store
  ) {
    this.translate.setDefaultLang('de');
    this.matIconRegistry.addSvgIcon('correct', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/correct.svg'))
    this.matIconRegistry.addSvgIcon('logo', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/logo.svg'))
    this.matIconRegistry.addSvgIcon('pw', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/pw.svg'))
    this.matIconRegistry.addSvgIcon('student', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/student_icon.svg'))
    this.matIconRegistry.addSvgIcon('teacher', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/teacher_icon.svg'))
    this.matIconRegistry.addSvgIcon('user', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/user_login.svg'))
    this.matIconRegistry.addSvgIcon('x', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/x.svg'))
    this.userService.getUser(1).subscribe(user => {
      this.store.dispatch(new UserActions.Login(user));
    });
  }
}
