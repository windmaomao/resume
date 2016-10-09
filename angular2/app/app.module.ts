import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, CVNavbarComponent }  from './app.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CVNavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
