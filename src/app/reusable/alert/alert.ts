import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [NgClass],
  selector: 'app-alert',
  styleUrl: './alert.css',
  templateUrl: './alert.html',
})
export class Alert {

  @Input() alertType: string ='';

  @Input() alertMessage: string ='';

  @Input() alertClass: string = '';

  getClassName() {
    if(this.alertType == "Success") {
      return 'alert-success'
    } else if (this.alertType == 'Warning') {
      return 'alert-warning'
    } else if (this.alertType == 'Error') {
      return 'alert-danger'
    } else {
      return '';
    }
  }
}
