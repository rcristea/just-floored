import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(private http: HttpClient) { }

  httpGet(url: string) {
    return this.http.get(url);
  }

  httpPost(url: string, {}) {
    return this.http.post(url, {name: 'Test'})
  }

  to(url: string, name: string, email: string, phone: string, message: string) {
    let data = {
      'name': name,
      'email': email,
      'phone': phone,
      'message': message,
    }

    return this.http.post(url, data);
  }
}
