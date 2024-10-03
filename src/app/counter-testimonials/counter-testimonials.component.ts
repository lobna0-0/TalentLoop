import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-testimonials',
  templateUrl: './counter-testimonials.component.html',
  styleUrl: './counter-testimonials.component.css'
})
export class CounterTestimonialsComponent {

  jopCount: number = 0;
  jopCountStop: any;

  memberCount: number = 0;
  memberCountStop: any;

  resumeCount: number = 0;
  resumeCountStop: any;

  companyCount: number = 0;
  companyCountStop: any;
  constructor() {
    // Start the counter directly in the constructor
    this.jopCountStop = setInterval(() => {
      this.jopCount += 1123;  // Increment count

      // Stop when reaching 435000
      if (this.jopCount >= 435000) {
        clearInterval(this.jopCountStop);
        this.jopCount = 435000;
      }
    }, 4);  // Set the interval to 5ms for smoother counting

    this.memberCountStop = setInterval(() => {
      this.memberCount += 123;  // Increment count

      // Stop when reaching 40000
      if (this.memberCount >= 40000) {
        clearInterval(this.memberCountStop);
        this.memberCount = 40000;
      }
    }, 4);  // Set the interval to 5ms for smoother counting

    this.resumeCountStop = setInterval(() => {
      this.resumeCount += 123;

      if (this.resumeCount >= 30000) {
        clearInterval(this.resumeCountStop)
        this.resumeCount = 30000;
      }
    }, 6)

    this.companyCountStop = setInterval(() => {
      this.companyCount += 43;

      if (this.companyCount >= 10500) {
        clearInterval(this.companyCountStop)
        this.companyCount = 10500;
      }
    }, 6)


  }
}
