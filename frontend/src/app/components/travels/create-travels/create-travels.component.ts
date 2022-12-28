import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Travels } from 'src/app/interfaces/travels';

@Component({
  selector: 'app-create-travels',
  templateUrl: './create-travels.component.html',
  styleUrls: ['./create-travels.component.css']
})
export class CreateTravelsComponent implements OnInit {

  formTravels: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formTravels = this.fb.group({
      destination: ['', Validators.required],
      departure: ['', Validators.required],
      date: ['', Validators.required],
      price: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  addTravels() {
    const travels: Travels = {
      destination: this.formTravels.value.destination,
      departure: this.formTravels.value.departure,
      date: this.formTravels.value.date,
      price: this.formTravels.value.price
    }

  console.log(travels);

  }


}
