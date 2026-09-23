import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-signl-form-basic',
  styleUrl: './signl-form-basic.css',
  templateUrl: './signl-form-basic.html',
})
export class SignlFormBasic {

  userSignal = signal({
    userId: 0,
    userName: '',
    emailId: '',
    fullName: '',
    password: ''
  });

  userForm = form(this.userSignal)

  http = inject(HttpClient);


  onSaveUser() {
    debugger;
    const formValie =  this.userForm().value(); 
    this.http.post("https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer",formValie ).subscribe({
      next:(Res:any)=>{
        debugger;
      }
    })
  }

}
 