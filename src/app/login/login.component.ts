import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { ParkingService } from '../services/parking.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService, private parkService: ParkingService, private router: Router) {

  }

  ngOnInit() {

  }

  login(email, password) {
    this.usersService.login(email, password).subscribe(user => {
      if (user) {
        this.parkService.getParkings().subscribe();
        this.router.navigate(['/']);
      } else {

      }
    })

  }
}
