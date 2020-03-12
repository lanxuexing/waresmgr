import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '@components/components.module';
import { PublicModule } from '@public/public.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor, ResponseInterceptor } from '@interceptors/index';
import { MyComponent } from './modules/my/my.component';
import { ChatComponent } from './modules/chat/chat.component';
import { CategoryComponent } from './modules/category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    ChatComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    PublicModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
