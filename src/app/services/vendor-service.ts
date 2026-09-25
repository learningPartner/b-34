import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class VendorService {

    http = inject(HttpClient);

    getAllVendors() {
        debugger;
        return this.http.get("https://projectapi.gerasim.in/api/BusBooking/GetBusVendors");
    }

    onSaveVendor(data:any) {
        debugger;
        return this.http.post("https://projectapi.gerasim.in/api/BusBooking/PostBusVendor",data)
    }
}
