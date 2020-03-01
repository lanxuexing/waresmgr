import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollableTabComponent } from '@components/scrollable-tab';

const COMMON = [
  ScrollableTabComponent,
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
