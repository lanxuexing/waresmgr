import { DialogService } from './../../services/dialog/dialog.service';
import { NgModule } from '@angular/core';
import { DetailComponent } from '@modules/detail';
import { DetailRoutingModule } from '@modules/detail/detail.routing';
import { ComponentsModule } from '@components/components.module';
import { FightComponent } from '@modules/detail/fight';
import { SnapUpComponent } from '@modules/detail/snap-up';
import { GoodsAmountComponent } from '@modules/detail/goods-amount';
import { ModalComponent } from '@modules/detail/modal';
import { OrderComponent } from '@modules/detail/order';

const COMMON = [
    DetailComponent,
    FightComponent,
    SnapUpComponent,
    GoodsAmountComponent,
    ModalComponent,
    OrderComponent,
];

@NgModule({
    declarations: [
        ...COMMON
    ],
    imports: [
        ComponentsModule,
        DetailRoutingModule
    ],
    entryComponents: [
        ModalComponent,
        GoodsAmountComponent
    ],
    providers: [
        DialogService
    ]
})
export class DetailModule { }
