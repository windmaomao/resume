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

 import { HighlightDirective } from '../app.directive';
 import {
   PageComponent, TestComponent, ProfileComponent,
   SectionComponent, DescriptionComponent, RecommendComponent,
   TimelineCurrentComponent, TimelineBeforeComponent, ExperienceComponent,
   GridArchitectComponent, GridComponentComponent,
   ArchitectComponent, ComponentComponent,
 }                             from './page.component';
 import { PageRouteModule }    from './page.route';
 import {
   ProfileService, ProfileStoreService
 }                             from '../../services/profile/profile.service';

 @NgModule({
   imports: [
     CommonModule,
     PageRouteModule,
   ],
   declarations: [
     PageComponent, TestComponent, ProfileComponent,
     SectionComponent, DescriptionComponent, RecommendComponent,
     TimelineCurrentComponent, TimelineBeforeComponent, ExperienceComponent,
     GridArchitectComponent, GridComponentComponent,
     ArchitectComponent, ComponentComponent,
     HighlightDirective,
   ],
   exports: [],
   providers: [ProfileService, ProfileStoreService],
 })
 export class PageModule { }
