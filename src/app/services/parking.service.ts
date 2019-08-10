import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class ParkingService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getParkings(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/parking.json`)
      .pipe(map(parkings => {
        localStorage.setItem('parkings', JSON.stringify(parkings));
        return parkings;
        })
      );
  }

  getParkingsByUser(userId): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/users.json`)
      .pipe(map(parkings => {
        let index = _.findIndex(parkings, { 'userId': userId});
        localStorage.setItem('myParkings', JSON.stringify(parkings[index]));
        return parkings[index];
      })
      );
  }


}
