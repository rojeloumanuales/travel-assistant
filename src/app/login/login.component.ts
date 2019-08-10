import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ParkingService } from '../services/parking.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  loginForm: FormGroup;

  invalidCreds = false;

  constructor(private usersService: UsersService, private router: Router, private parkService: ParkingService) {
    if (this.usersService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(this.password, [
        Validators.required
      ]),
    });
  }

  onSubmit() {
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;

    this.usersService.login(email, password).subscribe((user) => {
      if (user) {
        this.parkService.getParkings().subscribe();
        this.router.navigate(['/']);
      } else {
        this.invalidCreds = true;
      }
    })

  }
}
