import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from '@modules/detail';

const routes: Routes = [
    {
        path: 'detail',
        children: [
            {
                path: ':goodsId',
                component: DetailComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailRoutingModule {}
