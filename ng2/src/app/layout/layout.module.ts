/**
 * Layout module
 * Module for app layout
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 12/02/16
 */
 import { NgModule }           from '@angular/core';
 import { CommonModule }       from '@angular/common';
 import { RouterModule }       from '@angular/router';
 // import { FormsModule }        from '@angular/forms';
 // import { HttpModule } from '@angular/http';

 // import {
 //   ProfileService, ProfileStoreService
 // }                             from '../app.service';
 // import { HighlightDirective } from './app.directive';
 // import { AppComponent }       from './app.component';
 // import { AppRoutes }          from './app.route';
 // import {
 //   CVLayoutComponent,
 //   CVNavbarComponent, CVVersionComponent,
 //   CVHeaderComponent, CVFooterComponent,
 // }                             from './layout.component';
 import { LayoutComponent }          from './layout.component';

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
     RouterModule,
    //  RouterModule.forRoot(AppRoutes, { useHash: true }),
    //  FormsModule,
     // HttpModule
   ],
   declarations: [
    //  AppComponent,
     LayoutComponent,
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
   exports: [LayoutComponent],
   providers: [],
  //  providers: [ProfileService, ProfileStoreService, ProfileModelService],
  //  bootstrap: [AppComponent]
 })
 export class LayoutModule { }
