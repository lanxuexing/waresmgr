import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridItemDirective } from './grid-item.directive';
import { GridItemImageDirective } from './grid-item-image.directive';
import { GridItemTitleDirective } from './grid-item-title.directive';

const COMMON = [
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective,
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
export class DirectivesModule { }
