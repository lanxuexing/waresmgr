import { NgModule } from '@angular/core';
import { HomeService } from '@services/home';

const COMMON = [
  HomeService
];

@NgModule({
  providers: [
    ...COMMON
  ]
})
export class ServicesModule { }
