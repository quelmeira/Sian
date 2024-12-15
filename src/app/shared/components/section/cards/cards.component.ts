import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: false,

  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  cards = [
    {
      image: 'http://localhost:4200/assets/images/download.jpeg',
      title: 'Card 1',
      text: 'Este é o texto do primeiro card.'
    },
    {
      image: 'http://localhost:4200/assets/images/download.jpeg',
      title: 'Card 2',
      text: 'Este é o texto do segundo card.'
    },
    {
      image: 'http://localhost:4200/assets/images/download.jpeg',
      title: 'Card 3',
      text: 'Este é o texto do terceiro card.'
    },
    {
      image: 'http://localhost:4200/assets/images/download.jpeg',
      title: 'Card 4',
      text: 'Este é o texto do quarto card.'
    },
  ];

}
