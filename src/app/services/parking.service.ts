import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ParkingService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getParkings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/parking.json`);
  }


}
