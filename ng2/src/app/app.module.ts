/**
 * App module
 * Module for bootstraping all components
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/15/16
 */
import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { RouterModule }       from '@angular/router';
// import { FormsModule }        from '@angular/forms';
// import { HttpModule } from '@angular/http';

// import {
//   ProfileService, ProfileStoreService
// }                             from './app.service';
// import { HighlightDirective } from './app.directive';
// import { LayoutModule }       from './layout/layout.module';
import { AppComponent, AppTestComponent }
                              from './app.component';
import { AppRouteModule }     from './app.route';
// import {
//   CVLayoutComponent,
//   CVNavbarComponent, CVVersionComponent,
//   CVHeaderComponent, CVFooterComponent,
// }                             from './layout/layout.component';
//
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
    BrowserModule,
    AppRouteModule,
    // LayoutModule,
    // RouterModule.forRoot(AppRoutes, { useHash: true }),
    // FormsModule,
    // HttpModule
  ],
  declarations: [
    // components
    AppComponent, AppTestComponent
    // CVLayoutComponent,
    // CVNavbarComponent, CVVersionComponent,
    // CVHeaderComponent, CVFooterComponent,
    // CVSectionComponent,
    // CVDescriptionComponent, CVRecommendComponent,
    // CVTimelineCurrentComponent, CVTimelineBeforeComponent,
    // CVExperienceComponent,
    // CVGridArchitectComponent, CVGridComponentComponent,
    // CVArchitectComponent, CVComponentComponent,
    // CVEditComponent, CVProfileEditComponent, CVExperienceEditComponent,

    // directives
    // HighlightDirective,
  ],
  // providers: [ProfileService, ProfileStoreService, ProfileModelService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
