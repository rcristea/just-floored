import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { DatepickerOptions } from 'ng2-datepicker';
import { getYear } from 'date-fns';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css']
})
export class MultiStepFormComponent implements OnInit {
  formOne: FormGroup;
  formTwo: FormGroup;

  step: number = 1; 
  datepickerOptions: DatepickerOptions = {
    minYear: getYear(new Date()),
    maxYear: getYear(new Date()) + 5,
    maxDate: new Date(),
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
    productOfInterest: null,
    roomsOfInterest: null,
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
        basementCheckbox: null,
        bathroomCheckbox: null,
      }, { validators: this.requireAtLeastOneValidator }),
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

  }

  step3() {

  }

  step4() {

  }
}
