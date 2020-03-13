import { NgModule } from '@angular/core';
import { DetailComponent } from '@modules/detail';
import { DetailRoutingModule } from '@modules/detail/detail.routing';
import { ComponentsModule } from '@components/components.module';
import { OrderComponent } from '@modules/detail/order';

const COMMON = [
    DetailComponent,
    OrderComponent,
];

@NgModule({
    declarations: [
        ...COMMON
    ],
    imports: [
        ComponentsModule,
        DetailRoutingModule
    ]
})
export class DetailModule { }
