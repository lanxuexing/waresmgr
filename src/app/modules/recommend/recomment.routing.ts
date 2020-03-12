import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendComponent } from '@modules/recommend';

const routes: Routes = [
    {
        path: '',
        component: RecommendComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecommendRoutingModule {}
