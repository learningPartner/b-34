import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule, JsonPipe],
  selector: 'app-vendors',
  styleUrl: './vendors.css',
  templateUrl: './vendors.html',
})
export class Vendors {
  carList = signal<any[]>([]);

  httpClient = inject(HttpClient);

  vendorName: string = '';
  mobileNo: string = '';
  email: string = '';

  isEditMode = false;

  newVendorObj = {
    vendorId: 0,
    vendorName: '',
    contactNo: '',
    emailId: '',
  };

  isButtonClicked = false;

  constructor() {
    this.getAllCars();
  }

  getAllCars() {
    this.httpClient.get('https://projectapi.gerasim.in/api/BusBooking/GetBusVendors').subscribe({
      next: (res: any) => {
        this.carList.set(res);
      },
      error: (error: any) => {
        alert('API Error');
      },
    });
  }

  onSaveVendor(form: NgForm) { 
    this.isButtonClicked = true;
    if (!form.invalid) {
      const value = this.newVendorObj;
      debugger;
      this.httpClient
        .post('https://projectapi.gerasim.in/api/BusBooking/PostBusVendor', this.newVendorObj)
        .subscribe({
          next: (response: any) => {
            debugger;
            alert('Car Has been Created Succes');
            this.getAllCars();
          },
          error: (err: any) => {
            debugger;
            alert('Api error');
          },
        });
    }
  }

  editVendor(data: any) {
    const strngObk = JSON.stringify(data);

    const plainObj = JSON.parse(strngObk);

    this.newVendorObj = plainObj;
    this.isEditMode = true;
  }

  onReset() {
    this.newVendorObj = {
      contactNo: '',
      emailId: '',
      vendorId: 0,
      vendorName: '',
    };
    this.isEditMode = false;
  }

  onUpdateVendor() {
    this.httpClient
      .put(
        'https://projectapi.gerasim.in/api/BusBooking/PutBusVendors?id=' +
          this.newVendorObj.vendorId,
        this.newVendorObj,
      )
      .subscribe({
        next: (response: any) => {
          debugger;
          alert('Car Has been Updated Succes');
          this.getAllCars();
        },
        error: (err: any) => {
          debugger;
          alert('Api error');
        },
      });
  }

  onDeleteVendor(id: number) {
    const isConfirm = confirm('Are you sure want to Delete');
    if (isConfirm == true) {
      this.httpClient
        .delete('https://projectapi.gerasim.in/api/BusBooking/DeleteBusVendor?id=' + id)
        .subscribe({
          next: (res: any) => {
            alert('Car Has been Delketed Succes');
            this.getAllCars();
          },
        });
    }
  }
}
