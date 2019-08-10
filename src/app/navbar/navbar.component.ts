import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(private uService: UsersService) { }

    ngOnInit() {
    }

    logout() {
        this.uService.logout();
    }
}
