import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent }       from './app.component';
import { LayoutComponent }    from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    // CVNavbarComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
