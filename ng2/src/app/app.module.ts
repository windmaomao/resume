/**
 * App module
 * Module for bootstraping all components
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/15/16
 */
import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { ProfileService }     from './app.service';
import { HighlightDirective } from './app.directive';
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
    // components
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

    // directives
    HighlightDirective,
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
