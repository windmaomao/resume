import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { ProfileService }     from './app.service';
import { AppComponent }       from './app.component';
import {
  CVLayoutComponent,
  CVNavbarComponent, CVVersionComponent,
  CVHeaderComponent, CVFooterComponent,
}                             from './layout/layout.component';

import {
  CVSectionComponent,
  CVDescriptionComponent, CVRecommendComponent,
  CVTimelineCurrentComponent, CVTimelineBeforeComponent,
  CVExperienceComponent,
  CVGridArchitectComponent, CVGridComponentComponent,
  CVArchitectComponent, CVComponentComponent,
}                             from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    CVLayoutComponent,
    CVNavbarComponent, CVVersionComponent,
    CVHeaderComponent, CVFooterComponent,
    CVSectionComponent,
    CVDescriptionComponent, CVRecommendComponent,
    CVTimelineCurrentComponent, CVTimelineBeforeComponent,
    CVExperienceComponent,
    CVGridArchitectComponent, CVGridComponentComponent,
    CVArchitectComponent, CVComponentComponent,
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
