import { NgIf, NgForOf, NgTemplateOutlet } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  imports: [NgIf, NgForOf, NgTemplateOutlet],
  selector: 'app-template-container',
  styleUrl: './template-container.css',
  templateUrl: './template-container.html',
})
export class TemplateContainer implements OnInit {

  isDiv1Visiable: boolean = false;

  cityList: string[]= [];

  postList =  signal<any[]>([])

   
  http=  inject(HttpClient)

  isLoader = signal<boolean>(false);

  ngOnInit(): void {
    this.getAllPhotos()
  }


  getAllPhotos() {
    this.isLoader.set(true)
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe({
      next:(resL:any) =>{
        this.postList.set(resL);
        this.isLoader.set(false)
      }
    })
  }

}
