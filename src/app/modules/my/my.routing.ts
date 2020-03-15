import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponent } from '@modules/my';
import { ProfileComponent } from '@modules/my/profile';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: MyComponent },
            { path: 'profile', component: ProfileComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyRoutingModule {}
