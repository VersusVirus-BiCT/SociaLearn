import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from '../models/question';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private api = environment.API_URL + '/questions';

  constructor(private http: HttpClient) { }

  public getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.api);
  }
}
