import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule) },
  { path: 'recommend', loadChildren: () => import('@modules/recommend/recommend.module').then(m => m.RecommendModule) },
  { path: 'category', loadChildren: () => import('@modules/category/category.module').then(m => m.CategoryModule) },
  { path: 'chat', loadChildren: () => import('@modules/chat/chat.module').then(m => m.ChatModule) },
  { path: 'my', loadChildren: () => import('@modules/my/my.module').then(m => m.MyModule) },
  { path: 'detail', loadChildren: () => import('@modules/detail/detail.module').then(m => m.DetailModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
