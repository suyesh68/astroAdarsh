import { Component } from '@angular/core';
import {CalendarCommonModule, CalendarEvent} from 'angular-calendar'

@Component({
  selector: 'app-book-consultation',
  standalone: true,
  imports: [CalendarCommonModule],
  templateUrl: './book-consultation.component.html',
  styleUrl: './book-consultation.component.scss'
})
export class BookConsultationComponent {
  view:string = 'month';
  
evnts:CalendarEvent[]=[

]
}
