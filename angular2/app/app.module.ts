import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  AppComponent,
  CVNavbarComponent, CVVersionComponent,
  CVHeaderComponent, CVFooterComponent
}  from './app.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    CVNavbarComponent, CVVersionComponent,
    CVHeaderComponent, CVFooterComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
