import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na',
})
export class NaPipe implements PipeTransform {

  transform(value: unknown, dafaultText?: string): unknown {
    
    if (value == '' || value == undefined || value == null) {
      if(dafaultText != undefined) {
         return  dafaultText;
      } else {
        return "NA"
      }
    } else {
      return value;
    }
  }
}
