export class VendorModel {
  vendorId: number;
  vendorName: string;
  contactNo: string;
  emailId?: string;

  constructor() {
    debugger;
    this.vendorId = 0;
    this.contactNo= '';
    this.vendorName = ''; 
  }
}

export interface IVendorModel {
  vendorId: number;
  vendorName: string;
  contactNo: string;
  emailId?: string; 
}
