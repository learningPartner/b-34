import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { form, FormField, minLength, pattern, required } from '@angular/forms/signals';
import { ShowMoreLess } from '../../reusable/show-more-less/show-more-less';
import { Alert } from '../../reusable/alert/alert';
import { ProgreeBar } from '../../reusable/progree-bar/progree-bar';

@Component({
  imports: [FormField, ShowMoreLess, Alert, ProgreeBar],
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

  textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. ";

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
 