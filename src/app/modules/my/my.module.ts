import { NgModule } from '@angular/core';
import { MyComponent } from '@modules/my';
import { MyRoutingModule } from '@modules/my/my.routing';

const COMMMON = [
    MyComponent
];

@NgModule({
    declarations: [
        ...COMMMON
    ],
    imports: [
        MyRoutingModule
    ]
})
export class MyModule { }
