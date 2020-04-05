import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { USERS } from '../../app.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: User[] = USERS;

  public getUsers(): Observable<User[]> {
    return of(this.users);
  }

  public getUser(id: number): Observable<User> {
    return of(this.users.find(u => u.id === id));
  }

  public putUser(user: User): void {
    const idx = this.users.findIndex(u => u.id === user.id);
    this.users[idx] = user;
  }
}
