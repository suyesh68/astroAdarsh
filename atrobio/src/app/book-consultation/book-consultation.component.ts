import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {CalendarCommonModule, CalendarEvent} from 'angular-calendar'

@Component({
  selector: 'app-book-consultation',
  standalone: true,
  imports: [CalendarCommonModule,ReactiveFormsModule],
  templateUrl: './book-consultation.component.html',
  styleUrl: './book-consultation.component.scss'
})
export class BookConsultationComponent {
  bookingForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }
  submitForm(): void {
    if (this.bookingForm.valid) {
      // Submit form data
      console.log(this.bookingForm.value);
    }
  }
}
