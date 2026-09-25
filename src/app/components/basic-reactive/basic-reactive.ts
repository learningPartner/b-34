import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';
import { IDepartmentList } from '../../models/dept.model';
import { IVendorModel, VendorModel } from '../../models/vendor.model';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-basic-reactive',
  styleUrl: './basic-reactive.css',
  templateUrl: './basic-reactive.html',
})
export class BasicReactive implements OnInit {

  departmentForm: FormGroup = new FormGroup({
    departmentId: new FormControl(0),
    departmentName: new FormControl('',[Validators.required, Validators.minLength(4)]),
    departmentLogo: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
  });

  departmentForm2!: FormGroup;

  vendorObj :  VendorModel = new VendorModel();

  deptList = signal<IDepartmentList[]>([]);

  http = inject(HttpClient);

  formBuilder = inject(FormBuilder);

  desigNAtionForm!: FormGroup;

  courseName: string;

  constructor() { 
    this.courseName = "Java";
    this.departmentForm2 = this.formBuilder.group({
      departmentId: [0],
      departmentName: [''],
      departmentLogo: ['']
    })
    this.desigNAtionForm =  this.formBuilder.group({
      designationId: [0],
      designatioName: ['']
    })
  }

  ngOnInit(): void {
     this.getDept();
  }

  onEdit(data:any) {
    debugger;
    // this.departmentForm = new FormGroup({
    //   departmentId: new FormControl(data.departmentId),
    //   departmentName: new FormControl(data.departmentName),
    //   departmentLogo: new FormControl(data.departmentLogo)
    // });

    //this.departmentForm.patchValue(data)

    this.departmentForm.setValue(data)
  }

  getDept() {
    this.http.get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment').subscribe({
      next: (res: any) => {
        this.deptList.set(res.data);
      },
    });
  }

  onSaveDept() {
    const formValue = this.departmentForm.value;
    debugger;
    this.http
      .post('https://projectapi.gerasim.in/api/Complaint/AddNewDepartment', formValue)
      .subscribe({
        next: (res: any) => {
          alert('Ddept Saved');
        },
      });
  }
}
