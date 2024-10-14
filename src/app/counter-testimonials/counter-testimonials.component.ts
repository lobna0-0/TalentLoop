import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-counter-testimonials',
  templateUrl: './counter-testimonials.component.html',
  styleUrls: ['./counter-testimonials.component.css']
})
export class CounterTestimonialsComponent implements AfterViewInit {

  jopCount: number = 0;
  jopCountStop: any;

  memberCount: number = 0;
  memberCountStop: any;

  resumeCount: number = 0;
  resumeCountStop: any;

  companyCount: number = 0;
  companyCountStop: any;

  // Flag to check if the counters have started
  private countersStarted: boolean = false;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let countsec: NodeListOf<HTMLElement> = document.querySelectorAll('.main3 .col-md-3') as NodeListOf<HTMLElement>;
    let screenHeight = window.innerHeight;
    const sectionPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + window.innerHeight;

    // If all elements moved up, don't go into loop
    if (!countsec[countsec.length - 1].classList.contains('move-up')) {
      countsec.forEach((element: HTMLElement) => {
        let elementPosition = element.getBoundingClientRect().top;
        let startPoint = elementPosition - screenHeight;

        if (startPoint <= 0) {
          element.classList.add('move-up');
        }
      });
    }

    if (scrollPosition > sectionPosition && !this.countersStarted) {
      this.countersStarted = true;
      this.startCounters();
    }
  }

  startCounters() {
    this.jopCountStop = setInterval(() => {
      this.jopCount += 800;
      if (this.jopCount >= 435000) {
        clearInterval(this.jopCountStop);
        this.jopCount = 435000;
      }
    }, 5);

    this.memberCountStop = setInterval(() => {
      this.memberCount += 60;
      if (this.memberCount >= 40000) {
        clearInterval(this.memberCountStop);
        this.memberCount = 40000;
      }
    }, 5);

    this.resumeCountStop = setInterval(() => {
      this.resumeCount += 50;
      if (this.resumeCount >= 30000) {
        clearInterval(this.resumeCountStop);
        this.resumeCount = 30000;
      }
    }, 5);

    this.companyCountStop = setInterval(() => {
      this.companyCount += 40;
      if (this.companyCount >= 10500) {
        clearInterval(this.companyCountStop);
        this.companyCount = 10500;
      }
    }, 10);
  }

  // Use AfterViewInit to ensure DOM is fully loaded before manipulating it
  ngAfterViewInit() {
    const carouselInner = document.querySelector('.carousel-inner') as HTMLElement;
    const carouselItems = document.querySelectorAll('.carousel-item') as NodeListOf<HTMLElement>;
    const nextButton = document.querySelector('.carousel-control-next') as HTMLElement;
    const prevButton = document.querySelector('.carousel-control-prev') as HTMLElement;

    // Add null checks and log the elements to debug
    if (!carouselInner || !carouselItems.length || !nextButton || !prevButton) {
      console.error('Carousel elements are missing or not found.');
      return;
    }

    console.log('Carousel initialized:', { carouselInner, carouselItems, nextButton, prevButton });

    let carouselWidth = carouselInner.scrollWidth;
    let itemWidth = carouselItems[0].offsetWidth;
    let scrollPosition = 0;

    // Next button functionality
    nextButton.addEventListener('click', () => {
      if (scrollPosition < (carouselWidth - (itemWidth * 3))) {
        scrollPosition += itemWidth;
        carouselInner.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    });

    // Previous button functionality
    prevButton.addEventListener('click', () => {
      if (scrollPosition > 0) {
        scrollPosition -= itemWidth;
        carouselInner.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    });
  }

}
