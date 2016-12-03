/**
 * App routes
 * Define application routes
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/10/16
 */
import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { AppTestComponent }       from './app.component';

// import {
//   CVDescriptionComponent, CVRecommendComponent, CVExperienceComponent,
//   CVArchitectComponent, CVComponentComponent
// }                         from './page/page.component';
// import {
//   CVUpdateComponent
// }                         from './page/update.component';
// import {
//   CVEditComponent
// }                         from './edit/edit.component';

export const appRoutes: Routes = [
  { path: '',             component: AppTestComponent },
  // { path: '',             component: CVDescriptionComponent },
  // { path: 'recommend',    component: CVRecommendComponent },
  // { path: 'experience',   component: CVExperienceComponent },
  // { path: 'architect',    component: CVArchitectComponent },
  // { path: 'component',    component: CVComponentComponent },
  // { path: 'edit',         component: CVEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouteModule {}
