import { Component } from '@angular/core';
 
@Component({
  imports: [],
  selector: 'app-data-types',
  styleUrl: './data-types.css',
  templateUrl: './data-types.html',
})
export class DataTypes {

  // string , number, boolean, date, nan, undeifned, null, function, object, array
  // any

  courseName : string = '123';
  courseDuration = "3 Months";

  rollNo: number = 123;
  productPrice  = 12.50;

  isProductActive : boolean = true;
  isStudentPresnt =  false;

  currentDate: Date =  new Date();

  student;
  employeeName: string;
  studentName : string = "";

  employee: any = "Rahulk";

  cityList : string [] = ["Pune","Mumabi","Solpaur","Nagpur"];

  rollNoList : number [] = [11,12,131,41,51,6]; 

  studentList :any = [
    {name:'chetan',city:'Pune'}, 
    {name:'chetan',city:'Pune'}, 
    {name:'chetan',city:'Pune'}
  ];
  product = null;
  school =  undefined;

  
  constructor() {
    this.employee = 123;
    this.employee = true;
    this.employee = ['','',''];

    this.student = {
      name: 'AAA',
      city:'Pune'
    }
    this.employeeName = "Chetan";
    let someVale: string = "123123";
    this.courseName  = "Dot net"; 
    this.courseDuration = "2 months"; 
    this.rollNo = 454;

    console.log(this.cityList);
    console.log(this.employeeName); 

    
    
  }


  
}


 