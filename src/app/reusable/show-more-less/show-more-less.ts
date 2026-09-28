import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-show-more-less',
  styleUrl: './show-more-less.css',
  templateUrl: './show-more-less.html',
})
export class ShowMoreLess {


  @Input() myText: string = '';
  @Input() minCharCount: number = 30;

  isFullTextVisiable =  true;


  toggle() {
    this.isFullTextVisiable =  !this.isFullTextVisiable;
  }
}
