import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-my-button',
  styleUrl: './my-button.css',
  templateUrl: './my-button.html',
})
export class MyButton {


  @Input() btnText: string = '';
  @Input() btnColorClass: string = '';

  @Output() onBtnClick = new EventEmitter<void>();


  onClick() {
     debugger;
    this.onBtnClick.emit();
  }

}
