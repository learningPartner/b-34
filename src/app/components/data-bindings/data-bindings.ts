import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule,RouterLink],
  selector: 'app-data-bindings',
  styleUrl: './data-bindings.css',
  templateUrl: './data-bindings.html',
})
export class DataBindings {

  courseName: string = "Angular 22 Full Course";
  rollNo = 121;
  isStudentActive : boolean = true;
  procudePrcie = 1200.50;

  selectedCityName = "Nagpur";

  inputType: string = "text"

  myPlaceHolderText = "Eanter Surname";
  noOfRows = 6;
  divClassName = "primary"

  num1 =0;
  num2 =0;

  result: number = 0;

  constructor(){
   
  }

  addNumbers() {
    const result2 ="2323"
    debugger;
    this.result =  this.num1 +  this.num2;
  }


  showAlert() {
    alert("Welcome B-35")
    confirm("are you sure want to delete")
  }

  showTechStackName(tech: string) {
    debugger;
    //alert(tech)
    this.courseName = tech;
  }

  setInputType(inputTypeName: string) {
    debugger;
    this.inputType = inputTypeName;
  }

  onCityChanged() {
    alert("City Chnages")
  }

  onMouseEnterDiv() {
    console.log("Mouse enetered Div");
    
  }
  onMouseLeftDiv(){
     console.log("Mouse  Left Div");
  }

  onTextChnages() {
    console.log("Text valus echnagesz");
    
  }



}
