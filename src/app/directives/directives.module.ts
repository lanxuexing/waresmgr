import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridItemDirective } from '@directives/grid-item.directive';
import { GridItemImageDirective } from '@directives/grid-item-image.directive';
import { GridItemTitleDirective } from '@directives/grid-item-title.directive';
import { CateGoryDirective } from '@directives/category.directive';
import { AvatarDirective } from '@directives/avatar.directive';

const COMMON = [
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective,
  CateGoryDirective,
  AvatarDirective,
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
