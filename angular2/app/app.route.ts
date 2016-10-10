import { Routes }         from '@angular/router';

import {
  CVDescriptionComponent, CVRecommendComponent, CVExperienceComponent
}                         from './page.component';

export const AppRoutes: Routes = [
  { path: '',             component: CVDescriptionComponent },
  { path: 'recommend',    component: CVRecommendComponent },
  { path: 'experience',    component: CVExperienceComponent },
];
