import { NgModule } from '@angular/core';
import { ComponentsModule } from '@components/components.module';
import { RecommendComponent } from '@modules/recommend';
import { RecommendRoutingModule } from '@modules/recommend/recomment.routing';

const COMMON = [
    RecommendComponent
];

@NgModule({
    declarations: [
        ...COMMON
    ],
    imports: [
        ComponentsModule,
        RecommendRoutingModule
    ]
})
export class RecommendModule {}
