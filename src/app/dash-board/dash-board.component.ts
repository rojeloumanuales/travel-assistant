import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../services/parking.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  constructor(private parkService: ParkingService) {
    // this.parkService.getParkings().subscribe();
    const parking = {
      company: 'sm',
      details: '',
      capacity: '300',
      occupied: '20',
      type: '4w',
      city: 'Cebu',
      address: 'Sm City',
      barangay: 'Mabolo'
    };
    this.parkService.addParking(parking);
  }

  ngOnInit() {
  }

}
