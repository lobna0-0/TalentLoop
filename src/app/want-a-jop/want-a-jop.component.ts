import { Component } from '@angular/core';

@Component({
  selector: 'app-want-a-jop',
  templateUrl: './want-a-jop.component.html',
  styleUrl: './want-a-jop.component.css'
})
export class WantAJopComponent {
   //code navTab
    activeTab: string = 'job';
    switchTab(tab: string){
      this.activeTab = tab;
    }
}
