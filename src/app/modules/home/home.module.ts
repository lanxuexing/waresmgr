import { NgModule } from '@angular/core';
import { ComponentsModule } from '@components/components.module';
import { HomeDetailComponent } from '@modules/home/home-detail';
import { HomeComponent } from '@modules/home/home.component';
import { HomeRoutingModule } from '@modules/home/home.routing';

const COMMON = [
    HomeComponent,
    HomeDetailComponent
];

@NgModule({
    declarations: [
        ...COMMON
    ],
    imports: [
        ComponentsModule,
        HomeRoutingModule,
    ],
    exports: [],
    providers: [],
})
export class HomeModule {}
