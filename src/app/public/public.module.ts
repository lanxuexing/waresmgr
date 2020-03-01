import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

const COMMON = [
  BrowserAnimationsModule,
  HttpClientModule,
  RouterModule,
];


@NgModule({
  imports: [
    ...COMMON
  ],
  exports: [
    ...COMMON
  ]
})
export class PublicModule {
  constructor(
    @Optional() @SkipSelf() parent: PublicModule
  ) {
    if (parent) {
      throw new Error('模块已经存在，不能再次创建～');
    }
  }
}
