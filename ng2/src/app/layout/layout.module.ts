/**
 * Layout module
 * Module for app layout
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 12/02/16
 */
import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';

import {
  CVLayoutComponent,
  CVNavbarComponent, CVVersionComponent,
  CVHeaderComponent, CVFooterComponent,
}                             from './layout.component';

@NgModule({
  imports: [
  ],
  declarations: [
    CVLayoutComponent,
    CVNavbarComponent, CVVersionComponent,
    CVHeaderComponent, CVFooterComponent,
  ],
  providers: [],
  bootstrap: []
})
export class LayoutModule { }
