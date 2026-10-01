import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonService } from '../../services/common-service';
import { VendorService } from '../../services/vendor-service';
import { IVendorModel, VendorModel } from '../../models/vendor.model';
import { ShowMoreLess } from '../../reusable/show-more-less/show-more-less';
import { Alert } from '../../reusable/alert/alert';
import { MyButton } from '../../reusable/my-button/my-button';
import { ListBox } from '../../reusable/list-box/list-box';
import { FormatCardNoPipe } from '../../pipes/format-card-no-pipe';
import { NaPipe } from '../../pipes/na-pipe';
import { Observable, Subscription } from 'rxjs';

@Component({
  imports: [FormsModule, JsonPipe, ShowMoreLess, Alert, MyButton, ListBox, FormatCardNoPipe, NaPipe,AsyncPipe],
  selector: 'app-vendors',
  styleUrl: './vendors.css',
  templateUrl: './vendors.html',
})
export class Vendors  implements OnDestroy{
  
  

  httpClient = inject(HttpClient);

  roleList: string[]= ['Guest','Admin','Employee','HR'];

  documentList: string[] = ['Aadhar Card','Driving','Pan Card', 'Election Card']

  vendorName: string = '';
  mobileNo: string = '';
  email: string = '';

  isEditMode = false;
  cardNo = "1122334455667878";

  newVendorObj : VendorModel =  new VendorModel();
  
  isButtonClicked = false; 

  commonSrv = inject(CommonService);
  vendorSrv = inject(VendorService);

  sellectedRole: string = '';

  subscriptionList: Subscription[]= [];

  vendorList$ : Observable<VendorModel[]> = new Observable<VendorModel[]>();

  constructor() {
    const version =  this.commonSrv.versionName;
    this.vendorList$ = this.vendorSrv.getAllVendors();
    
   // this.cardNo = this.commonSrv.formatAadharCard('2233223322334545');
  }


  getSelectedRole(roloe: string) {
    debugger
    this.sellectedRole =  roloe;
  }

  onDocumentSelection(docName: string) {
    debugger;
  }
  // formatAadharCard(cardNo: string) {
  //   const last4Digit =  cardNo.slice(12);
  //   const newStr = "**** **** ****" + last4Digit;
  //   return newStr;
  // }

  // getAllCars() {
  //   debugger;
  //   const getVendorSub = this.vendorSrv.getAllVendors().subscribe({
  //     next: (res: any) => {
  //       debugger;
  //       this.vendorList.set(res);
  //     },
  //   });
  //   this.subscriptionList.push(getVendorSub)
  // }

  // getAllCars() {
  //   this.httpClient.get('https://projectapi.gerasim.in/api/BusBooking/GetBusVendors').subscribe({
  //     next: (res: any) => {
  //       this.carList.set(res);
  //     },
  //     error: (error: any) => {
  //       alert('API Error');
  //     },
  //   });
  // }

  // onSaveVendor(form: NgForm) {
  //   this.isButtonClicked = true;
  //   if (!form.invalid) {
  //     const value = this.newVendorObj;
  //     debugger;
  //     this.httpClient.post('https://projectapi.gerasim.in/api/BusBooking/PostBusVendor', this.newVendorObj)
  //       .subscribe({
  //         next: (response: any) => {
  //           debugger;
  //           alert('Car Has been Created Succes');
  //           this.getAllCars();
  //         },
  //         error: (err: any) => {
  //           debugger;
  //           alert('Api error');
  //         },
  //       });
  //   }
  // }

  onSaveVendor(form: NgForm) {
    debugger;
    this.isButtonClicked = true;
    if (!form.invalid) {
      const value = this.newVendorObj;
      debugger;
      const post = this.vendorSrv.onSaveVendor(this.newVendorObj).subscribe({
        next: (response: any) => {
          debugger;
          alert('Car Has been Created Succes');
         /// this.getAllCars();
        },
        error: (err: any) => {
          debugger;
          alert('Api error');
        },
      });

      this.subscriptionList.push(post)



    }
  }

  editVendor(data: any) {
    debugger;
    this.newVendorObj = this.commonSrv.deepCopyVendorObject(data);
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
         /// this.getAllCars();
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
           // this.getAllCars();
          },
        });
    }
  }

  ngOnDestroy(): void {
    this.subscriptionList.forEach((item)=>{
      item.unsubscribe();
    })
  }
}
