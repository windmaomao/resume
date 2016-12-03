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
  TestComponent,
  DescriptionComponent,
  RecommendComponent,
  ExperienceComponent,
}                                 from './page.component';

export const pageRoutes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: 'test',
        component: TestComponent
      },
      {
        path: '',
        component: DescriptionComponent
      },
      {
        path: 'recommend',
        component: RecommendComponent
      },
      {
        path: 'experience',
        component: ExperienceComponent
      }
    ]
  },
  // { path: 'architect',    component: CVArchitectComponent },
  // { path: 'component',    component: CVComponentComponent },
  // { path: 'edit',         component: CVEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(pageRoutes)],
  exports: [RouterModule]
})
export class PageRouteModule {}
