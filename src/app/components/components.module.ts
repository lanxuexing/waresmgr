import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from '@components/carousel';
import { HorizontalGridComponent } from '@components/horizontal-grid';
import { ScrollableTabComponent } from '@components/scrollable-tab';


const COMMON = [
  ScrollableTabComponent,
  CarouselComponent,
  HorizontalGridComponent,
];

const MODULE = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];


@NgModule({
  declarations: [
    ...COMMON
  ],
  imports: [
    ...MODULE
  ],
  exports: [
    ...COMMON,
    ...MODULE
  ]
})
export class ComponentsModule { }
