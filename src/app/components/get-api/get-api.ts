import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-get-api',
  styleUrl: './get-api.css',
  templateUrl: './get-api.html',
})
export class GetAPI {
  //httpObj = new HttpClient();

  httpClientObj = inject(HttpClient); //16

  userList :any = [];
  //todoItemList: any = [];

  todoItemList  = signal<any>([]);

  albumList = signal<any>([])

  carList =  signal<any>([])



  constructor(private http: HttpClient) {}

  getAllUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (result: any) => {
        debugger;
        this.userList =  result;
      },
      error: (error: any) => {
         debugger;
      },
    });
  }

  getAllTodoItems() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe({
      next:(res:any)=>{
        this.todoItemList.set(res)
      },
      error:(err:any)=>{
        alert("API fails")
      }
    })
  }

  getAllAlbums() {
     this.http.get("https://jsonplaceholder.typicode.com/albums").subscribe({
      next:(res:any)=>{
        this.albumList.set(res)
      },
      error:(err:any)=>{
        alert("API fails")
      }
    })
  }

  getAllCars() {
    this.http.get("https://freeapi.gerasim.in/api/CarRentalApp/GetCars").subscribe({
      next:(res:any)=>{
        this.carList.set(res.data)
      },
      error:(err:any)=>{

      }
    })
  }
}
