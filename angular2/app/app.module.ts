import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import {
  AppComponent,
}                         from './app.component';

import {
  CVNavbarComponent, CVVersionComponent,
  CVHeaderComponent, CVFooterComponent,
}                         from './layout.component';

import {
  CVRecommendComponent
}                         from './page.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    CVNavbarComponent, CVVersionComponent,
    CVHeaderComponent, CVFooterComponent,
    CVRecommendComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
