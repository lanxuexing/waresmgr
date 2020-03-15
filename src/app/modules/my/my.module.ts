import { NgModule } from '@angular/core';
import { MyComponent } from '@modules/my';
import { MyRoutingModule } from '@modules/my/my.routing';
import { ComponentsModule } from '@components/components.module';
import { ProfileComponent } from './profile/profile.component';

const COMMON = [
    MyComponent
];

@NgModule({
    declarations: [
        ...COMMON,
        ProfileComponent
    ],
    imports: [
        ComponentsModule,
        MyRoutingModule
    ]
})
export class MyModule { }
