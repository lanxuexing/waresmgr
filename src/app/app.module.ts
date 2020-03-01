import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '@components/components.module';
import { PublicModule } from '@public/public.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PublicModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
