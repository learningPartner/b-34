import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]',
})
export class NumbersOnly {


  @HostListener('keydown', ['$event'])
  onKeyDown(event:any) {
    const userValue =  event.key;
    debugger;
    const newReqEx = new RegExp('^\\d+$');
    if(!newReqEx.test(userValue)) {
      event.preventDefault();
    }

  }
}
