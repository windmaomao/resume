/**
 * App module
 * Module for bootstraping all components
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/15/16
 */
import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { ProfileService }     from './app.service';
import { HighlightDirective } from './app.directive';
import { AppComponent }       from './app.component';
import { AppRoutes }          from './app.route';
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
import {
  CVUpdateComponent
}                             from './page/update.component';


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
    CVUpdateComponent,

    // directives
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, { useHash: true }),
    // FormsModule,
    // HttpModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
