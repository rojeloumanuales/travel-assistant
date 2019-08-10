import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from "@angular/router"
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParkingService } from '../services/parking.service';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {

  company: string = '';
  details: string = '';
  capacity: string = '';
  location: string = '';
  typewheel: string = '';
  city: string = '';
  barangay: string = '';
  addForm: FormGroup;

  constructor(private parkingService: ParkingService) {

  }

  ngOnInit() {
    this.addForm = new FormGroup({
      company: new FormControl(this.company, [
        Validators.required
      ]),
      details: new FormControl(this.details, [
        Validators.required
      ]),
      capacity: new FormControl(this.capacity, [
        Validators.required
      ]),
      location: new FormControl(this.location, [
        Validators.required
      ]),
      typewheel: new FormControl(this.typewheel, [
        Validators.required
      ]),
      city: new FormControl(this.city, [
        Validators.required
      ]),
      barangay: new FormControl(this.barangay, [
        Validators.required
      ]),
    });
  }
  onSubmit() {
    const company = this.addForm.get('company').value;
    const details = this.addForm.get('details').value;
    const capacity = this.addForm.get('capacity').value;
    const location = this.addForm.get('location').value;
    const type = this.addForm.get('typewheel').value;
    const city = this.addForm.get('city').value;
    const barangay = this.addForm.get('barangay').value;
    const post_val = {
      company,
      details,
      capacity,
      location,
      type,
      city,
      barangay
    };

    this.parkingService.addParking(post_val);
  }

}
