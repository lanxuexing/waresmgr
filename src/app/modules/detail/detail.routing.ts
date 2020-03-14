import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from '@modules/detail';
import { OrderComponent } from '@modules/detail/order';

const routes: Routes = [
    {
        path: 'detail',
        children: [
            {
                path: ':goodsId',
                component: DetailComponent
            }
        ]
    },
    { path: 'order', component: OrderComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailRoutingModule {}
