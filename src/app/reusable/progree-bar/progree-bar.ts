import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [NgStyle],
  selector: 'app-progree-bar',
  styleUrl: './progree-bar.css',
  templateUrl: './progree-bar.html',
})
export class ProgreeBar {

  @Input() progress: number = 0;
}
