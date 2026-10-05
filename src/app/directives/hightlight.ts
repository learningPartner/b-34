import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]',
})
export class Hightlight {

  @Input() colorName: string = "red";

  constructor(private eleRef: ElementRef){
    console.log("Hightlight Executed") 
  }

  @HostListener('mouseover')
  onMouseHover( ){
     this.eleRef.nativeElement.style.color =  this.colorName;
  }

  @HostListener('mouseout')
  onMouseLeft() {
      this.eleRef.nativeElement.style.color = 'black'
  }

  @HostListener('click')
  onMouseClick() {
    console.log("Mouse clciked")
  }
}
