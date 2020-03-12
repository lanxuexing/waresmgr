import { NgModule } from '@angular/core';
import { ChatComponent } from '@modules/chat';
import { ChatRoutingModule } from '@modules/chat/chat.routing';
import { ComponentsModule } from '@components/components.module';

const COMMON = [
    ChatComponent
];

@NgModule({
    declarations: [
        ...COMMON
    ],
    imports: [
        ComponentsModule,
        ChatRoutingModule
    ]
})
export class ChatModule { }
