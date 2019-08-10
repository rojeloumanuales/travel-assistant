import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../services/parking.service';
import { UsersService } from '../services/users.service';

@Component({
    selector: 'app-listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

    isAdmin: boolean;
    parkData: any;
    uniqueCity: any;
    uniqueBrgy: any;
    citySelected: string;
    brgySelected: string;
    parkingAll: any;

    constructor(private pService: ParkingService, private uService: UsersService) { }

    ngOnInit() {
        if (this.uService.isLoggedIn()) {
            this.isAdmin = true;
        } else {
            this.isAdmin = false;
        }

        this.getParkings();
    }

    getParkings() {
        this.pService.getParkings().subscribe(data => {
            this.parkData = data;
            this.parkingAll = data;
            this.filterCity();
            this.filterBrgy();
        });
    }

    filterCity() {
        this.uniqueCity = this.parkData.reduce((acc, current) => {
            const x = acc.find(item => item.city === current.city);
            if (!x) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }, []);
    }

    filterBrgy() {
        this.uniqueBrgy = this.parkData.reduce((acc, current) => {
            const x = acc.find(item => item.barangay === current.barangay);
            if (!x) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }, []);
    }

    filterCityList(value) {
        if (value) {
            if (this.brgySelected) {
                this.parkData = this.parkingAll.filter(p => { return (p.city === value && p.barangay === this.brgySelected) });
            } else {
                this.parkData = this.parkingAll.filter(p => { return p.city === value });
            }
        } else {
            this.parkData = this.parkingAll;
        }
    }

    filterBrgyList(value) {
        if (value) {
            if (this.citySelected) {
                this.parkData = this.parkingAll.filter(p => { return (p.barangay === value && p.city === this.citySelected) });
            } else {
                this.parkData = this.parkingAll.filter(p => { return p.barangay === value });
            }
        } else {
            this.parkData = this.parkingAll;
        }
    }
}
