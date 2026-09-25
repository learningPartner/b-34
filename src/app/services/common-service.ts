import { Service } from '@angular/core';

@Service()
export class CommonService {
    
  versionName: string = 'Demon v-001';

  formatAadharCard(cardNo: string) {
    const last4Digit = cardNo.slice(12);
    const newStr = '**** **** **** ' + last4Digit;
    return newStr;
  }

  deepCopyVendorObject(data: any) {
    const strngObk = JSON.stringify(data);
    const plainObj = JSON.parse(strngObk);
    return plainObj;
  }
}
