import { Component } from '@angular/core';
import { Candidate } from '../candidate';

@Component({
  selector: 'app-canditates',
  templateUrl: './canditates.component.html',
  styleUrl: './canditates.component.css'
})

export class CanditatesComponent {
  candidates: Candidate[] = [
    {
      img: 'img/Basant.png',
      location: 'Cairo City, Egypt',
      name: 'Basant Adel',
      position: 'Frontend Developer',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      lastActivity: 'Last Activity 3 months ago'
    },
    {
      img: 'img/person_2.jpg',
      location: 'Western City, UK',
      name: 'Sam Carter',
      position: 'Software Developer',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      lastActivity: 'Last Activity 3 months ago'
    },
    {
      img: 'img/person_3.jpg',
      location: 'Western City, UK',
      name: 'James Michael',
      position: 'Backend Developer',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      lastActivity: 'Last Activity 3 months ago'
    },
    {
      img: 'img/person_4.jpg',
      location: 'Western City, UK',
      name: 'Leo Henry',
      position: 'Graphic Designer',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      lastActivity: 'Last Activity 3 months ago'
    },
    {
      img: 'img/person_1.jpg',
      location: 'Western City, UK',
      name: 'Danica Lewis',
      position: 'Graduate',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      lastActivity: 'Last Activity 4 months ago'
    },
    {
      img: 'img/person_6.jpg',
      location: 'Western City, UK',
      name: 'Mateo Oliver',
      position: 'Software Developer',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      lastActivity: 'Last Activity 3 months ago'
    }
  ];
}
