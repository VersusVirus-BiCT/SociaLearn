import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public api = environment.API_URL + '/user';

  constructor(private http: HttpClient) { }

  public getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.api}/${id}`);
  }
}
