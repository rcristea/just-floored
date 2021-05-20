import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css']
})
export class MultiStepFormComponent implements OnInit {
  multiStepForm: FormGroup;
  step: number = 1; 

  constructor(private formBuilder: FormBuilder) { 
    this.multiStepForm = this.formBuilder.group({
      propertyType: [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  step1() {

  }

  step2() {

  }

  step3() {

  }

  step4() {

  }
}
