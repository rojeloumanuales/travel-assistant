import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from "@angular/router"
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {

  company: string ='';
  details: string = '';
  capacity: string = '';
  location: string = '';
  typewheel: string = '';
  addForm: FormGroup; 

  constructor() { 

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
    });
  }
  onSubmit() {
    let company = this.addForm.get('company').value;
    let details = this.addForm.get('details').value;
    let capacity = this.addForm.get('capacity').value;
    let location = this.addForm.get('location').value;
    let vehicle_type = this.addForm.get('typewheel').value;
    
    let post_val = {'company': company,'details': details, 'capacity': capacity, 'location': location, 'vehicle_type': vehicle_type}
    console.log('post val', post_val);
  }

}
