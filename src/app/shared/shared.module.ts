import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { SectionComponent } from './components/section/section.component';
import { CardsComponent } from './components/section/cards/cards.component';
import { CollectionIconComponent } from './components/collection-icon/collection-icon.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SectionComponent,
    CardsComponent,
    CollectionIconComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SectionComponent,
    CardsComponent,
    CollectionIconComponent
  ]
})
export class SharedModule { }
