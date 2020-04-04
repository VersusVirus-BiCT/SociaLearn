import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { UserState } from '../state/user.state';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private store: Store) { }

  public canActivate(): Observable<boolean | UrlTree> {
    return this.store.select(UserState.activeUser).pipe(map(user => !!user));
  }
}
