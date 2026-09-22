import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DataTypes } from '../data-types/data-types';

@Component({
  imports: [DataTypes],
  selector: 'app-admin',
  styleUrl: './admin.css',
  templateUrl: './admin.html',
})
export class Admin
  implements
    OnInit,
    AfterViewInit,
    OnChanges,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    DoCheck,
    OnDestroy
{
  constructor() {
    console.log('constructor');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
 
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
