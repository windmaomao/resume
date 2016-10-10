import {
  CVDescriptionComponent, CVRecommendComponent, CVExperienceComponent
}                         from './page.component';

export const AppRoutes = [
  { path: '',             component: CVDescriptionComponent },
  { path: 'recommend',    component: CVRecommendComponent },
  { path: 'experience',    component: CVExperienceComponent },
];
