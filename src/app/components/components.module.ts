import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from '@components/carousel';
import { HorizontalGridComponent } from '@components/horizontal-grid';
import { ScrollableTabComponent } from '@components/scrollable-tab';
import { DirectivesModule } from '@directives/index';
import { TimeHourglassComponent } from '@components/time-hourglass';
import { FooterComponent } from '@components/footer';
import { VerticalGridComponent } from '@components/vertical-grid';


const COMMON = [
  ScrollableTabComponent,
  CarouselComponent,
  HorizontalGridComponent,
  TimeHourglassComponent,
  FooterComponent,
  VerticalGridComponent,
];

const MODULE = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  DirectivesModule,
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
