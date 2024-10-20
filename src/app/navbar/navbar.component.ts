import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  scrollTop(){
    scrollTo(0 ,0);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    let navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 300) {
        navbar.classList.add('navbar-fixed');
        navbar.style.backgroundColor = 'white';
      }  else {
        navbar.classList.remove('navbar-fixed');
        navbar.style.backgroundColor = 'transparent';
      }
    }
  }

}
