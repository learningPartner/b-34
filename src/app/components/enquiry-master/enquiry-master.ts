import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-enquiry-master',
  styleUrl: './enquiry-master.css',
  templateUrl: './enquiry-master.html',
})
export class EnquiryMaster {
  http = inject(HttpClient);
  categoryList = signal<any>([]);
  statusList = signal<any>([]);

  newEnquiryObj = {
    enquiryId: 0,
    customerName: '',
    customerEmail: '',
    customerPhone: 'sting',
    message: '',
    categoryId: 0,
    statusId: 0,
    enquiryType: '',
    isConverted: false,
    enquiryDate: new Date(),
    followUpDate:new Date(),
    feedback: '',
  };

  constructor() {
    this.getAllCategory();
    this.getAllStatus();
  }

  getAllCategory() {
    this.http.get('https://api.freeprojectapi.com/api/Enquiry/get-categories').subscribe({
      next: (res: any) => {
        this.categoryList.set(res.data);
      },
    });
  }

  getAllStatus() {
    this.http.get('https://api.freeprojectapi.com/api/Enquiry/get-statuses').subscribe({
      next: (res: any) => {
        this.statusList.set(res.data);
      },
    });
  }

  onSaveEnquiry() {
    debugger;
    this.http.post("https://api.freeprojectapi.com/api/Enquiry/create-enquiry",this.newEnquiryObj ).subscribe({
      next:(res:any)=>{
        if(res.result) {
          alert("Enquiry Created succes")
        } else {
          alert(res.message)
        }
      }
    })
  }
}
