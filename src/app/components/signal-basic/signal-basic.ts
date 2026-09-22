import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-signal-basic',
  styleUrl: './signal-basic.css',
  templateUrl: './signal-basic.html',
})
export class SignalBasic {


  productName: string = 'Mobile';

  productPrice = signal<number>(12500);

  isProductActive = signal(false);

  techName: WritableSignal<string> = signal<string>("");

  cityList = signal<string[]>(['Pune','Nagpur','Jaipur'])
  cityName = '';

  counter = signal<number>(0)

  student = signal({
    studName: '',
    studCity:'Pune'
  })

  constructor() {
    setTimeout(() => {
      debugger;
      this.productName = 'Laptop';
     // this.productPrice.set(15600);
      this.cityList.update(oldList => ["Panji",...oldList]);
    }, 3000);
  }

  chnageName(name: string) {
    this.student.update(oldData => ({...oldData, studName:name }))
  }

  onDecrement(){
    debugger;
    this.counter.update(oldVal => oldVal-1)
  }

   onIncrement(){
    this.counter.update(oldVal =>  oldVal+1)
  }

  addCity() {
    // // const oldCityList =  this.cityList();
    // // oldCityList.push(this.cityName);

    // // this.cityList.set(oldCityList);

    // this.cityList.update(oldList => [this.cityName,...oldList]);

    this.cityList().push(this.cityName);


  }

  setTechName(langName: string) {
    this.techName.set(langName);
  }

  onChnage() {
    setTimeout(() => {
      debugger;
      this.productName = 'Headphones';
    }, 3000);
  }
}
