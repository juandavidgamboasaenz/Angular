import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
