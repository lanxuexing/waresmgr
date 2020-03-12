import { NgModule } from '@angular/core';
import { MyComponent } from '@modules/my';
import { MyRoutingModule } from '@modules/my/my.routing';
import { ComponentsModule } from '@components/components.module';

const COMMON = [
    MyComponent
];

@NgModule({
    declarations: [
        ...COMMON
    ],
    imports: [
        ComponentsModule,
        MyRoutingModule
    ]
})
export class MyModule { }
