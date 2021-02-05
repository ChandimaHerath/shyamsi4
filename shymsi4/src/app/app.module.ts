import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChandimaComponent } from './modules/chandima/chandima.component';
import { ChathuraComponent } from './modules/chathura/chathura.component';

@NgModule({
  declarations: [
    AppComponent,
    ChandimaComponent,
    ChathuraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
