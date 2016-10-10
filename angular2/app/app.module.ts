import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { AppRoutes }      from './app.route';

import {
  CVNavbarComponent, CVVersionComponent,
  CVHeaderComponent, CVFooterComponent,
}                         from './layout.component';

import {
  CVDescriptionComponent, CVRecommendComponent, CVExperienceComponent,
  CVArchitectComponent, CVComponentComponent, CVMiscComponent
}                         from './page.component';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, { useHash: true })
  ],
  declarations: [
    AppComponent,
    CVNavbarComponent, CVVersionComponent,
    CVHeaderComponent, CVFooterComponent,
    CVDescriptionComponent, CVRecommendComponent, CVExperienceComponent,
    CVArchitectComponent, CVComponentComponent, CVMiscComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
