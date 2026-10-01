import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Alert } from '../../reusable/alert/alert';
import { ProgreeBar } from '../../reusable/progree-bar/progree-bar';

@Component({
  imports: [Alert, ProgreeBar],
  selector: 'app-view-child',
  styleUrl: './view-child.css',
  templateUrl: './view-child.html',
})
export class ViewChildEx implements OnInit, AfterViewInit{

  @ViewChild('courseNameTem') courseTextElement!: ElementRef;

  @ViewChild('myDiv') myDiv11!: ElementRef;

  @ViewChild(Alert) alertCompInstance!: Alert;

  @ViewChild(ProgreeBar) progressCompInstance!: ProgreeBar;

  isActive :boolean;

  constructor(){
    debugger;
    this.isActive = false;
  }
  

  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
     this.courseTextElement.nativeElement.value = 'Dot Net'
  }

  redData() {
    debugger;
    const compData =  this.alertCompInstance.alertMessage;
    const proe =  this.progressCompInstance.progress;
  }

  readCourse() {
    const courser =  this.courseTextElement.nativeElement.value;
    alert(courser)
  }

  setJava() {
     this.courseTextElement.nativeElement.value = "Java"
  }

  addDivColor(color: string) {
    this.myDiv11.nativeElement.style.backgroundColor = color;
  }
}
