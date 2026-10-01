import { Component } from '@angular/core';
import { FormatCardNoPipe } from '../../pipes/format-card-no-pipe';

@Component({
  imports: [FormatCardNoPipe],
  selector: 'app-enrollments',
  styleUrl: './enrollments.css',
  templateUrl: './enrollments.html',
})
export class Enrollments {}
