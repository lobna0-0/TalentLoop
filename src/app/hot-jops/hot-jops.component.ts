import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hot-jops',
  templateUrl: './hot-jops.component.html',
  styleUrl: './hot-jops.component.css'
})
export class HotJopsComponent {


  @HostListener('window:scroll', [])
  onScroll()  {

    let jop: NodeListOf<HTMLElement> = document.querySelectorAll('.column-jobs')
    let screenHeight = window.innerHeight

    if(!jop[jop.length - 1].classList.contains('move-up')){
      jop.forEach((element: HTMLElement) => {
        let elementPosition = element.getBoundingClientRect().top;
        let startPoint = elementPosition - screenHeight;

        if (startPoint <= 0) {
          element.classList.add('move-up');
        }
      });
    }
  }
}
