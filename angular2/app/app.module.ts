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
  CVDescriptionComponent, CVRecommendComponent, CVExperienceComponent
}                         from './page.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    CVNavbarComponent, CVVersionComponent,
    CVHeaderComponent, CVFooterComponent,
    CVDescriptionComponent, CVRecommendComponent, CVExperienceComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
