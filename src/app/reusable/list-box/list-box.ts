import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [NgClass],
  selector: 'app-list-box',
  styleUrl: './list-box.css',
  templateUrl: './list-box.html',
})
export class ListBox {

  @Input() itemList: string[] = [];

  @Output() getSelectedItem = new EventEmitter<string>();

  @Input() selectedItem: string = '';


  onSelectItem(itemName: string) {
    debugger;
    this.selectedItem =  itemName;
    this.getSelectedItem.emit(this.selectedItem);
  }

}
