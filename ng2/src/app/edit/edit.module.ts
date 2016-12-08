/**
 * Edit module
 * Module for edit resume
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 12/03/16
 */
 import { NgModule }           from '@angular/core';
 import { CommonModule }       from '@angular/common';
 import { RouterModule }       from '@angular/router';
 import { FormsModule }        from '@angular/forms';

 import {
   EditComponent, SectionEditComponent,
   ProfileEditComponent, ExperienceEditComponent,
 }                              from './edit.component';
 import { EditRouteModule }     from './edit.route';
 import { ProfileModelService } from '../../services/profile/profile.model.service';

 @NgModule({
   imports: [
     CommonModule,
     FormsModule,
     EditRouteModule,
   ],
   declarations: [
     EditComponent, SectionEditComponent,
     ProfileEditComponent, ExperienceEditComponent,
   ],
   exports: [],
   providers: [ProfileModelService],
 })
 export class EditModule { }
