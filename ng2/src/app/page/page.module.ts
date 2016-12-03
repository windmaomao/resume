/**
 * Page module
 * Module for public resume pages
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 12/02/16
 */
 import { NgModule }           from '@angular/core';
 import { CommonModule }       from '@angular/common';
 import { RouterModule }       from '@angular/router';

 import {
   ProfileService, ProfileStoreService
 }                             from '../app.service';
 // import { HighlightDirective } from './app.directive';
 // import { AppComponent }       from './app.component';
 // import { PageRoutes }         from './page.route';
 import {
   PageComponent, TestComponent, ProfileComponent,
   SectionComponent, DescriptionComponent, RecommendComponent,
  //  CVRecommendComponent,
 }                             from './page.component';
 import { PageRouteModule }    from './page.route';

 // import {
 //   CVSectionComponent,
 //   CVDescriptionComponent, CVRecommendComponent,
 //   CVTimelineCurrentComponent, CVTimelineBeforeComponent,
 //   CVExperienceComponent,
 //   CVGridArchitectComponent, CVGridComponentComponent,
 //   CVArchitectComponent, CVComponentComponent,
 // }                             from './page/page.component';
 // import {
 //   ProfileModelService
 // }                             from './profile/profile.service';
 // import {
 //   CVEditComponent, CVProfileEditComponent, CVExperienceEditComponent
 // }                             from './edit/edit.component';

 @NgModule({
   imports: [
     CommonModule,
     PageRouteModule,
    //  FormsModule,
     // HttpModule
   ],
   declarations: [
     PageComponent, TestComponent, ProfileComponent,
     SectionComponent, DescriptionComponent, RecommendComponent,
    //  CVNavbarComponent, CVVersionComponent,
    //  CVHeaderComponent, CVFooterComponent,
    //  CVSectionComponent,
    //  CVDescriptionComponent, CVRecommendComponent,
    //  CVTimelineCurrentComponent, CVTimelineBeforeComponent,
    //  CVExperienceComponent,
    //  CVGridArchitectComponent, CVGridComponentComponent,
    //  CVArchitectComponent, CVComponentComponent,
    //  CVEditComponent, CVProfileEditComponent, CVExperienceEditComponent,
     //
    //  // directives
    //  HighlightDirective,
   ],
   exports: [PageComponent],
   providers: [ProfileService, ProfileStoreService],
  //  providers: [ProfileService, ProfileStoreService, ProfileModelService],
  //  bootstrap: [AppComponent]
 })
 export class PageModule { }
