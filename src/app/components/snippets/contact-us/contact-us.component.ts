import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SendEmailService } from '../../../services/send-email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactUsForm: FormGroup = this.formBuilder.group({
    name: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    phone: null,
    message: [null, Validators.required],
    captcha: [null, Validators.required],
  });

  messageSent: boolean = false;

  constructor(public sendEmail: SendEmailService, private formBuilder: FormBuilder) { 
  }

  ngOnInit(): void { }

  onSubmit() {
    let formData = {
      name: this.contactUsForm.controls.name.value,
      email: this.contactUsForm.controls.email.value,
      phone: this.contactUsForm.controls.phone.value,
      message: this.contactUsForm.controls.message.value,
    }

    this.sendEmail.to('http://localhost:3000/contact/sendmail', formData).subscribe(
      data => {
        let res: any = data;
        console.log(`${formData.name} succesfully sent a message.`);
      }
    );

    this.contactUsForm.reset();
    this.messageSent = true;
  }
}
