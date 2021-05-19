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
    this.sendEmail.to('http://localhost:3000/contact/sendmail', this.name.value, this.email.value, this.phone.value, this.message.value).subscribe(
      data => {
        let res: any = data;
        console.log(`${this.name.value} succesfully sent a message.`);
        /*
              Was about to start the node part of sending an email. Angular stuff should be done... But more might need to go here.


        */
      }
    )
  }
}
