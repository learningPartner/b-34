import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { form, FormField, minLength, pattern, required } from '@angular/forms/signals';

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

  userForm = form(this.userSignal,(schema)=>{
    required(schema.userName,{message:'This is Required'}),
    required(schema.emailId,{ message:'Email is Required'}),
    minLength(schema.userName,4, {message: 'Min 4 Char needed'}),
    pattern(schema.emailId, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, {message:'email is not proper'})
  })
  

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
 