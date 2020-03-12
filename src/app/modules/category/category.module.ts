import { NgModule } from '@angular/core';
import { CategoryComponent } from '@modules/category';
import { GategoryRoutingModule } from '@modules/category/category.routing';
import { ComponentsModule } from '@components/components.module';

const COMMON = [
    CategoryComponent
];

@NgModule({
    declarations: [
        ...COMMON
    ],
    imports: [
        ComponentsModule,
        GategoryRoutingModule
    ]
})
export class CategoryModule { }
