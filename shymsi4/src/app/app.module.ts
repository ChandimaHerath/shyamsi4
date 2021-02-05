import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChandimaComponent } from './modules/chandima/chandima.component';
import { ChathuraComponent } from './modules/chathura/chathura.component';
import { Chathura2Component } from './modules/chathura2/chathura2.component';
import { CherrypickchandimaComponent } from './modules/cherrypickchandima/cherrypickchandima.component';
import { VanaComponent } from './modules/vana/vana.component';
import { YaththaComponent } from './modules/yaththa/yaththa.component';
import { YaththaCherryPickComponent } from './modules/yaththa-cherry-pick/yaththa-cherry-pick.component';

@NgModule({
  declarations: [
    AppComponent,
    ChandimaComponent,
    ChathuraComponent,
    Chathura2Component,
    CherrypickchandimaComponent,
    VanaComponent,
    YaththaComponent,
    YaththaCherryPickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
