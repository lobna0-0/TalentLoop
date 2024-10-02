import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  jopCount: number = 0; // starting number
  finalJopCount: number = 200000; // target number
  incrementSpeed: number = 20; // speed of incrementing (in milliseconds)

  ngOnInit(): void {
    this.startCounter();
  }

  startCounter(){
    let interval = setInterval(() => {
      if (this.jopCount < this.finalJopCount) {
        this.jopCount += Math.ceil(this.finalJopCount / 100); // adjust the increment step
      } else{
        this.jopCount = this.finalJopCount; // stop at the final count
        clearInterval(interval);
      }
    }, this.incrementSpeed);
  }
}
