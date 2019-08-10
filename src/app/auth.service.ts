import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedin = false;
  user = {};
  tempUser = {
    email: 'email@email.com',
    name: 'namenamename'
  }

  constructor() { }

  login(email, password) {
    //
    this.isLoggedin = true;
    this.user = this.tempUser;
  }

  logout() {
    this.isLoggedin = false;
    this.user = {};
  }

  isLoggedIn() {
    return this.isLoggedIn;
  }

  getLoggedUser() {
    return this.user;
  }
}
