/**
 * App route  module
 * Define application routes
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/10/16
 */
import { Routes }         from '@angular/router';

import {
  CVDescriptionComponent, CVRecommendComponent, CVExperienceComponent,
  CVArchitectComponent, CVComponentComponent, CVMiscComponent
}                         from './page.component';

export const AppRoutes: Routes = [
  { path: '',             component: CVDescriptionComponent },
  { path: 'recommend',    component: CVRecommendComponent },
  { path: 'experience',   component: CVExperienceComponent },
  { path: 'architect',    component: CVArchitectComponent },
  { path: 'component',    component: CVComponentComponent },
  { path: 'misc',         component: CVMiscComponent },
];
