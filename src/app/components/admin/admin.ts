import { Component } from '@angular/core';
import { DataTypes } from '../data-types/data-types';
 
@Component({
  imports: [DataTypes],
  selector: 'app-admin',
  styleUrl: './admin.css',
  templateUrl: './admin.html',
})
export class Admin {


  productName = "Mobile A2";
  price = 12500;
}

 