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

  getParkingsByUser(userId) {
    const parkings = JSON.parse(localStorage.getItem('parkings'));
    const myParkings = parkings.filter(p => p.userId === userId);

    return myParkings;
  }

  addParking(data) {
    const user = JSON.parse(localStorage.getItem('user'));
    const parkings = JSON.parse(localStorage.getItem('parkings'));
    data.userId = user.id;
    data.id = parkings.length + 1;
    data.company = user.company;

    parkings.push(data);
    localStorage.removeItem('parkings');
    localStorage.setItem('parkings', JSON.stringify(parkings));
  }

  updateParking(parkingId, occupiedValue) {
    const parkings = JSON.parse(localStorage.getItem('parkings'));
    const index = _.findIndex(parkings, { 'id': parkingId });
    const parking = parkings[index];
    parking.occupied = occupiedValue;
    parkings[index] = parking;
    localStorage.removeItem('parkings');
    localStorage.setItem('parkings', JSON.stringify(parkings));

  }


}
