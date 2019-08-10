import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserssService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }


  getUser(email, password): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users.json`)
      .pipe(map(user => {
        console.log(user);
        // if (user.id === userId) {
        //   return user;
        // }

        // return;
      }));
  }


}
