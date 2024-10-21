import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ListaModule} from './lista/lista.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './lista/input/input.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListaModule
  ],
  exports: [
    InputComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
