import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChandimaComponent } from './modules/chandima/chandima.component';
import { ChathuraComponent } from './modules/chathura/chathura.component';
import { Chathura2Component } from './modules/chathura2/chathura2.component';
import { CherrypickchandimaComponent } from './modules/cherrypickchandima/cherrypickchandima.component';
import { VanaComponent } from './modules/vana/vana.component';

@NgModule({
  declarations: [
    AppComponent,
    ChandimaComponent,
    ChathuraComponent,
    Chathura2Component,
    CherrypickchandimaComponent,
    VanaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
