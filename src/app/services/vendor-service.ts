import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { IVendorModel } from '../models/vendor.model';

@Service()
export class VendorService {

    http = inject(HttpClient);

    getAllVendors(): Observable<IVendorModel[]> {
        debugger;
        return this.http.get<IVendorModel[]> ("https://projectapi.gerasim.in/api/BusBooking/GetBusVendors");
    }

    onSaveVendor(data:any) {
        debugger;
        return this.http.post("https://projectapi.gerasim.in/api/BusBooking/PostBusVendor",data)
    }
}
