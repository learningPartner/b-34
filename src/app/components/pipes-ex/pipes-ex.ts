import { DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe,
     DecimalPipe,DatePipe,SlicePipe, JsonPipe],
  selector: 'app-pipes-ex',
  styleUrl: './pipes-ex.css',
  templateUrl: './pipes-ex.html',
})
export class PipesEx {

  courseName =  'angular full stack Course';
  producePRice = 1245.5678;

  currentDate = new Date();

  numbersArray = [11,23,43,54,67,56,78,78,9,5,43,22,33,44];

  studentObj = {
    name:'chetan',
    city:'Pune',
    state:'MH'
  }



  constructor(){
    
  }

}
