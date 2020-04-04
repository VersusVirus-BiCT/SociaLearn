import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TaskGroupService {


  constructor(private http: HttpClient) { }

  public getTaskGroups() {
    return this.http.get(environment.API_URL + "/taskgroup");
  }

  public getTaskGroup(id: number) {
    return this.http.get(environment.API_URL + '/taskgroup/' + id);
  }

}
