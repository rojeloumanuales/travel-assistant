import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class UserssService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }


  getUser(email, password): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users.json`)
      .pipe(map(users => {
        let index = _.findIndex(users, { 'email': email, 'password': password });
        return users[index];
      })
      );
  }


}
