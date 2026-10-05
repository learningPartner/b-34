import { Component } from '@angular/core';
import { Hightlight } from '../../directives/hightlight';

@Component({
  imports: [Hightlight],
  selector: 'app-user-page',
  styleUrl: './user-page.css',
  templateUrl: './user-page.html',
})
export class UserPage {

  courseName = "Angular";

  duration = "3 Months"

}
