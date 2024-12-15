import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-collection-icon',
  standalone: false,

  templateUrl: './collection-icon.component.html',
  styleUrl: './collection-icon.component.scss'
})
export class CollectionIconComponent {
  @ViewChild('servicesWrapper') servicesWrapper!: ElementRef;

  scrollLeft() {
    this.servicesWrapper.nativeElement.scrollBy({
      left: -200, // Valor da rolagem à esquerda
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.servicesWrapper.nativeElement.scrollBy({
      left: 200, // Valor da rolagem à direita
      behavior: 'smooth'
    });
  }

}
