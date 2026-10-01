import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCardNo',
  pure: true
})
export class FormatCardNoPipe implements PipeTransform {

  transform(value: string, dafultPlaceholder?: string): unknown {
   console.log("na Pipe Executed")
    const last4Char = value.slice(12);
    if (dafultPlaceholder == undefined) {
      const staringChar = '**** **** **** ';
      return staringChar + last4Char;
    } else {
      let staringChar = '';
      if (dafultPlaceholder == '#') {
        staringChar = '#### #### #### ';
      } else if (dafultPlaceholder == '$') {
        staringChar = '$$$$ $$$$ $$$$ ';
      } else {
        staringChar = '**** **** **** ';
      }
      return staringChar + last4Char;
    }
  }
  



}
