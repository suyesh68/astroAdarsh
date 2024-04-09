import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { BookConsultationComponent } from './book-consultation/book-consultation.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
    {
        path: '', component: DashboardComponent,
        children: [
            {
                path: '', component: HomeComponent
            },
            {
                path: 'consultation', component: BookConsultationComponent
            },
            {
                path: 'review', component: ReviewsComponent
            },
            {
                path: 'about', component: AboutComponent
            },
            {
                path: 'courses', component: CoursesComponent
            }
        ]
    },
];
