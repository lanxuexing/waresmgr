import { NgModule } from '@angular/core';
import { ChatComponent } from '@modules/chat';
import { ChatRoutingModule } from '@modules/chat/chat.routing';

const COMMON = [
    ChatComponent
];

@NgModule({
    declarations: [
        ...COMMON
    ],
    imports: [
        ChatRoutingModule
    ]
})
export class ChatModule { }
