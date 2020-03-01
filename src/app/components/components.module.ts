import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollableTabComponent } from '@components/scrollable-tab';
import { CarouselComponent } from '@components/carousel';


const COMMON = [
  ScrollableTabComponent,
  CarouselComponent,
];


@NgModule({
  declarations: [
    ...COMMON
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMMON
  ]
})
export class ComponentsModule { }
