import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SexPipe } from '@pipes/sex.pipe';
import { GradePipe } from '@pipes/grade.pipe';

const COMMON = [
  SexPipe,
  GradePipe,
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
export class PipesModule { }
