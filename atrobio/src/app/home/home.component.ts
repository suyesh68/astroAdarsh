import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cardArray:any[] = [{
    tittle:"Free Kundali",
    content:"kkk"
  },
  {
    tittle:"Book Consultation",
    content:"kkk"
  }];
  courseArray:any[]=[1,2,3];
  videoId: string = 'https://www.youtube.com/watch?v=E_SbwSe15y0&list=RDO0I61W2pMss&index=4';
  videoUrl: SafeResourceUrl | undefined;
  statsArr = [
    {
      head:"120K",
      body:"Kundli Served"
    },
    {
      head:"30+",
      body:"Years of experience"
    },
    {
      head:"5K",
      body:"Stunds enrolled"
    },
    {
      head:"120K+",
      body:"consultation given "
    },
    {
      head:"120K",
      body:"Kundli Served"
    },
  ]
  constructor(private sanitizer: DomSanitizer) { }
  
  
  ngOnInit() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoId}`);
  }
  
  
}
