/**
 * App module
 * Setup components, routers and etc.
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/08/16
 */
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { AppRoutes }      from './app.route';

import {
  CVHighlightDirective
}                         from './app.directive';

import {
  CVNavbarComponent, CVVersionComponent,
  CVHeaderComponent, CVFooterComponent,
}                         from './layout.component';

import {
  CVDescriptionComponent, CVRecommendComponent, CVExperienceComponent,
  CVArchitectComponent,   CVComponentComponent, CVMiscComponent
}                         from './page.component';

import {
  CVSectionComponent,
  CVTimelineCurrentComponent, CVTimelineBeforeComponent,
  CVGridArchitectComponent, CVGridComponentComponent
}                         from './section.component';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, { useHash: true })
  ],
  declarations: [
    AppComponent,
    CVHighlightDirective,
    CVNavbarComponent, CVVersionComponent,
    CVHeaderComponent, CVFooterComponent,
    CVSectionComponent,
    CVTimelineCurrentComponent, CVTimelineBeforeComponent,
    CVGridArchitectComponent, CVGridComponentComponent,
    CVDescriptionComponent, CVRecommendComponent, CVExperienceComponent,
    CVArchitectComponent,   CVComponentComponent, CVMiscComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
