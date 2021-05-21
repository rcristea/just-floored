import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DatepickerOptions } from 'ng2-datepicker';
import { getYear } from 'date-fns';
import { SendEmailService } from '../../../services/send-email.service';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css']
})
export class MultiStepFormComponent implements OnInit {
  formOne: FormGroup;
  formTwo: FormGroup;
  formThree: FormGroup;

  step: number = 1;
  date: Date = new Date();
  datepickerOptions: DatepickerOptions = {
    minYear: getYear(this.date),
    maxYear: getYear(this.date) + 5,
    maxDate: this.date,
    placeholder: '',
    format: 'LLLL do yyyy',
    formatTitle: 'LLLL yyyy',
    formatDays: 'EEEEE',
    inputClass: 'form-control form-control-md u-datepicker-v1 g-brd-right-none rounded-0',
    scrollBarColor: '#dfe3e9',
  };
  
  multiStepForm = {
    propertyType: null,
    date: null,
    time: null,
    productsOfInterest: null,
    roomsOfInterest: ["", ""], // Make the type string[] so we can assign the checkbox kets to this
    fullName: null,
    email: null,
    phone: null,
    street: null,
    city: null,
    state: null,
    zip: null,
    buildingType: null,
    ownOrRent: null,
  }

  productsOfInterestOther = null;

  roomsOfInterestItems = [
    { key: 'Basement', text: 'Basement' },
    { key: 'Bathroom', text: 'Bathroom' }
  ]

  constructor(private formBuilder: FormBuilder) { 
    this.formOne = this.formBuilder.group({
      propertyType: [null, Validators.required],
      date: [null, Validators.required],
      time: [null, Validators.required],
    });

    this.formTwo = this.formBuilder.group({
      productsOfInterest: [null, Validators.required],
      productsOfInterestOther: null,
      roomsOfInterestGroup: this.formBuilder.group({
        basementCheckbox: false,
        bathroomCheckbox: false,
        bedroomCheckbox: false,
        diningRoomCheckbox: false,
        familyRoomCheckbox: false,
        livingRoomCheckbox: false,
        kitchenCheckbox: false,
        officeCheckbox: false,
        patioCheckbox: false,
        hallwayCheckbox: false,
        otherCheckbox: false,
      }, { validators: this.requireAtLeastOneValidator }),
    });

    this.formThree = this.formBuilder.group({
      fullName: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      phone: [null, Validators.required],
      street: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      zip: [null, [Validators.required]],
      buildingType: [null, Validators.required],
      ownOrRent: [null, Validators.required],
      captcha: [null, Validators.required],
    });
  }

  ngOnInit(): void { 
    
  }

  requireAtLeastOneValidator(g: FormGroup) {
    let checked = 0;

    Object.keys(g.controls).forEach(key => {
      const control = g.controls[key];

      if (control.value === true) {
        checked ++;
      }
    });

    return checked < 1 ? { requireAtLeastOne: true } : null;
  }

  step1() {
    if (this.formOne.valid) {
      this.step = 2;
      this.multiStepForm.propertyType = this.formOne.controls.propertyType.value;
      this.multiStepForm.date = this.formOne.controls.date.value;
      this.multiStepForm.time = this.formOne.controls.time.value;
    }
  }

  step2() {
    if (this.formTwo.valid) {
      this.step = 3;
      this.multiStepForm.productsOfInterest = this.formTwo.controls.productsOfInterest.value;

      let roomsGroup: FormGroup;
      roomsGroup = <FormGroup> this.formTwo.get('roomsOfInterestGroup');
      let roomsSelected: string[] = [];
      if (roomsGroup != null) {
        Object.keys(roomsGroup.controls).forEach(key => {
          const control = roomsGroup.controls[key];

          if (control.value) {
            roomsSelected.push(key);
          }
        });
      }

      this.multiStepForm.roomsOfInterest = roomsSelected;
    }
  }

  step3() {
    if (this.formThree.valid) {
      this.step = 4;
      this.multiStepForm.fullName = this.formThree.controls.fullName.value;
      this.multiStepForm.email = this.formThree.controls.email.value;
      this.multiStepForm.phone = this.formThree.controls.phone.value;
      this.multiStepForm.street = this.formThree.controls.street.value;
      this.multiStepForm.city = this.formThree.controls.city.value;
      this.multiStepForm.state = this.formThree.controls.state.value;
      this.multiStepForm.zip = this.formThree.controls.zip.value;
      this.multiStepForm.buildingType = this.formThree.controls.buildingType.value;
      this.multiStepForm.ownOrRent = this.formThree.controls.ownOrRent.value;

      this.formOne.reset();
      this.formTwo.reset();
      this.formThree.reset();
    }
  }

  back() {
     this.step--;
  }
}
