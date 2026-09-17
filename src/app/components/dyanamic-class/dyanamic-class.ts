import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NgClass, FormsModule, NgFor, NgStyle],
  selector: 'app-dyanamic-class',
  styleUrl: './dyanamic-class.css',
  templateUrl: './dyanamic-class.html',
})
export class DyanamicClass {
  div1Class: string = 'bg-success';
  div2ClassName = '';
  div3ClassName = '';
  isChecked = false;

  colorValue = '';

  myCustomCss = {
    color: 'orange',
    'background-color':'red',
    width: '100px',
    height: '200px'
  }

  myName ='';


  employeeList = [
    { empName: 'Sachin', city: 'Mumbai', state: 'MH', isActive: false },
    { empName: 'Rahul', city: 'Bhopal', state: 'MP', isActive: false },
    { empName: 'Suresh', city: 'Delhi', state: 'DL', isActive: true },
    { empName: 'Anand', city: 'Nagpur', state: 'MH', isActive: false },
    { empName: 'Gaurav', city: 'Pune', state: 'MH', isActive: true },
    { empName: 'Manav', city: 'Nagpur', state: 'MH', isActive: false },
  ];
  numberList = [1, 3, 5, 6, 7, 8, 4, 23, 45, 45, 65, 76, 87, 8, 9, 0];
  addDiv1Color(className: string) {
    this.div1Class = className;
  }

  addColor(color: string) {
    this.colorValue = color;
  }
}
