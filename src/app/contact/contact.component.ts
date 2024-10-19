import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  log_data: { username: string, email: string, subject: string, message: string} = {
    username: "",
    email: "",
    subject: "",
    message: ""
  }
  run(): void{
    
  }
}
