/**
 * Page routes
 * Define page routes
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 12/02/16
 */
import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import {
  PageComponent,
  // TestComponent,
  DescriptionComponent,
}                                 from './page.component';

export const pageRoutes: Routes = [
  {
    path: 'test',                 component: PageComponent,
    children: [
      // { path: '',                 component: TestComponent },
      { path: '',                 component: DescriptionComponent },
    ]
    // component: TestComponent
  },
  // { path: '',             component: CVDescriptionComponent },
  // { path: 'recommend',    component: CVRecommendComponent },
  // { path: 'experience',   component: CVExperienceComponent },
  // { path: 'architect',    component: CVArchitectComponent },
  // { path: 'component',    component: CVComponentComponent },
  // { path: 'edit',         component: CVEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(pageRoutes)],
  exports: [RouterModule]
})
export class PageRouteModule {}
