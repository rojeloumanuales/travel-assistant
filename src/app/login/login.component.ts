import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {

  }

  login(email, password) {
    this.usersService.login(email, password).subscribe(function (user) {
      if (user) {
        this.router.navigate(['/'])
      } else {
        
      }
    })

  }
}
