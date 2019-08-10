import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../services/parking.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  constructor(private parkService: ParkingService) {
  }

  ngOnInit() {
  }

}
