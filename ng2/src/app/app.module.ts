/**
 * App module
 * Module for application, including application
 * core modules, feature moduels and routes.
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/15/16
 */
import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { RouterModule }       from '@angular/router';
// import { FormsModule }        from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent }       from './app.component';
import { AppRouteModule }     from './app.route';
import { LayoutModule }       from './layout/layout.module';
import { PageModule }         from './page/page.module';
// import {
//   ProfileModelService
// }                             from './profile/profile.service';
// import {
//   CVEditComponent, CVProfileEditComponent, CVExperienceEditComponent
// }                             from './edit/edit.component';


@NgModule({
  imports: [
    BrowserModule,              // <- core module
    LayoutModule,               // <- layout module
    PageModule,                 // <- public page module
    AppRouteModule,             // <- app route module
    // FormsModule,
    // HttpModule
  ],
  declarations: [
    AppComponent,               // <- entry app component
    // CVEditComponent, CVProfileEditComponent, CVExperienceEditComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
