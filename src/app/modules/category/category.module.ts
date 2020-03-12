import { NgModule } from '@angular/core';
import { CategoryComponent } from '@modules/category';
import { GategoryRoutingModule } from '@modules/category/category.routing';

const COMMON = [
    CategoryComponent
];

@NgModule({
    declarations: [
        ...COMMON
    ],
    imports: [
        GategoryRoutingModule
    ]
})
export class CategoryModule { }
