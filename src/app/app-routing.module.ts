import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule) },
  { path: 'recommend', loadChildren: () => import('@modules/recommend/recommend.module').then(m => m.RecommendModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
