import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public api = environment.API_URL + '/user';
  public users: User[] = [
    {
      id: 1,
      username: 'admin',
      role: 'Administrator',
      achievements: [],
      tasks: [],
      karma: {
        experience: 2500,
        maxExperience: 7000,
        level: 6
      }
    },
    {
      id: 2,
      username: 'Teacher1',
      role: 'Teacher',
      achievements: [],
      tasks: [],
      karma: {
        experience: 100,
        maxExperience: 3000,
        level: 2
      }
    },
    {
      id: 3,
      username: 'student2',
      role: 'Student',
      achievements: [],
      tasks: [],
      karma: {
        experience: 6300,
        maxExperience: 10000,
        level: 9
      }
    },
    {
      id: 4,
      username: 'student3',
      role: 'Student',
      achievements: [],
      tasks: [],
      karma: {
        experience: 8500,
        maxExperience: 10000,
        level: 9
      }
    }
  ];

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
