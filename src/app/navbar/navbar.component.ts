import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    isLoggedIn: boolean;

    constructor(private uService: UsersService) { }

    ngOnInit() {
        if (this.uService.isLoggedIn()) {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
        }
    }

    logout() {
        this.uService.logout();
    }
}
