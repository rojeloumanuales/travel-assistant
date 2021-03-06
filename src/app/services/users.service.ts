import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class UsersService {

    apiUrl = environment.apiUrl;
    constructor(private http: HttpClient, private router: Router) { }


    login(email, password): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/users.json`)
            .pipe(map(users => {
                const index = _.findIndex(users, { email, password });
                localStorage.setItem('user', JSON.stringify(users[index]));
                return users[index];
            })
            );
    }

    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('myParkings');
        this.router.navigate(['/login']);
    }

    isLoggedIn() {
        if (localStorage.getItem('user')) {
            return true;
        }
        return false;
    }
}
