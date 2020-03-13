import { NgModule } from '@angular/core';
import { DetailComponent } from '@modules/detail';
import { DetailRoutingModule } from '@modules/detail/detail.routing';

const COMMON = [
    DetailComponent
];

@NgModule({
    declarations: [
        ...COMMON
    ],
    imports: [
        DetailRoutingModule
    ]
})
export class DetailModule { }
