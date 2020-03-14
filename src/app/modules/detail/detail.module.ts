import { NgModule } from '@angular/core';
import { DetailComponent } from '@modules/detail';
import { DetailRoutingModule } from '@modules/detail/detail.routing';
import { ComponentsModule } from '@components/components.module';
import { OrderComponent } from '@modules/detail/order';
import { FightComponent } from '@modules/detail/fight';
import { SnapUpComponent } from '@modules/detail/snap-up';

const COMMON = [
    DetailComponent,
    OrderComponent,
    FightComponent,
    SnapUpComponent,
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
