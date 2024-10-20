import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  @HostListener('window:scroll', [])
  onScroll()  {
    let searchDiv: HTMLElement = document.querySelector('.text') as HTMLElement;
    let secOne : NodeListOf<HTMLElement> = document.querySelectorAll('.section-1 .col-lg-3') as  NodeListOf<HTMLElement>;
    let hot : NodeListOf<HTMLElement> = document.querySelectorAll('.hot .card') as  NodeListOf<HTMLElement>;
    let lCandidates : HTMLElement = document.querySelector('.latest-canditates .row') as HTMLElement;
    let rBlog : HTMLElement = document.querySelector('.recent-blog .row')  as HTMLElement;
    let screenHeight = window.innerHeight;

    if (searchDiv) {
      let elementPosition = searchDiv.getBoundingClientRect().top;
      let startPoint = elementPosition - screenHeight;

      if (startPoint <= 0) {
        searchDiv.classList.add('text-up');
      }
    }

    // if all element moved up don't go to loop
    if(!secOne[secOne.length - 1].classList.contains('move-up')){
    secOne.forEach((element: HTMLElement) => {
      let elementPosition = element.getBoundingClientRect().top;
      let startPoint = elementPosition - screenHeight;

      if (startPoint <= 0) {
        element.classList.add('move-up');
      }
    });
  }

  if(!hot[hot.length - 1].classList.contains('move-up')){
    hot.forEach((element: HTMLElement) => {
      let elementPosition = element.getBoundingClientRect().top;
      let startPoint = elementPosition - screenHeight;
      if (startPoint <= 0 ) {
        element.classList.add('move-up');
      }
    });
  }

    if (lCandidates) {
      let elementPosition = lCandidates.getBoundingClientRect().top;
      let startPoint = elementPosition - screenHeight;
      if (startPoint <= 0 ) {
        lCandidates.classList.add('move-up');
      }
    }

    if (rBlog) {
      let elementPosition = rBlog.getBoundingClientRect().top;
      let startPoint = elementPosition - screenHeight;
      if (startPoint <= 0 ) {
        rBlog.classList.add('move-up');
      }
    }
  }
//====================================================================================
  //code counter 200,000
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
//=================================================================================
  //code navTab
  activeTab: string = 'job';
  switchTab(tab: string){
    this.activeTab = tab;
  }
//=================================================================================

  //code  latest candidates
  // currentIndex: number = 0;
  // items: HTMLElement[] ;

  // constructor(){
  //   // initialize items in ngoninit or later
  //   this.items = [];
  // }

  // ngAfterViewInit() {
  //   // select the items after the view is initialized
  //   this.items = Array.from(document.querySelectorAll('.col-lg-2'));
  // }




  // onBulletClick(index: number) : void{

  //   if (index !== this.currentIndex) {
  //     const currentItem = this.items[this.currentIndex];
  //     const newItem = this.items[index]
  //     // move class hidden
  //     currentItem.classList.add('hidden');
  //     currentItem.classList.remove('one');

  //     newItem.classList.remove('hidden');
  //     newItem.classList.add('one');
  //     // update the current element
  //     this.currentIndex = index;
  //     // update class active
  //     const bullets = document.querySelectorAll('.bullets span');
  //     bullets.forEach((bullet, idx) => {
  //       bullet.classList.toggle('active', idx === index);
  //     });
  //   }
  // }
}
