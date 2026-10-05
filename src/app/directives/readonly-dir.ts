import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReadonlyDir]',
})
export class ReadonlyDir {


  constructor(private elementRef: ElementRef,private renderer: Renderer2) {
    const loggedROle = localStorage.getItem("loggedRole");
    if(loggedROle == "guest") {
      //elementRef.nativeElement.style.disabled  = true;
      debugger;
      this.renderer.setAttribute(this.elementRef.nativeElement,'readonly','readonly') 
    }
  }

}
