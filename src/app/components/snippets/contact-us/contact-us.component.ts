import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SendEmailService } from '../../../services/send-email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  name = new FormControl('', [
    Validators.required,
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  phone = new FormControl();
  message = new FormControl('', [
    Validators.required,
  ]);

  constructor(public sendEmail: SendEmailService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let formData = {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      message: this.message.value,
    }

    this.sendEmail.to('http://localhost:3000/contact/sendmail', formData).subscribe(
      data => {
        let res: any = data;
        console.log(`${formData.name} succesfully sent a message.`);
      }
    )
  }
}
