/**
 * App routes
 * Define application routes
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/10/16
 */
import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

export const appRoutes: Routes = [
  // forward to feature module
  {
    path: '',
    redirectTo: 'professional',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRouteModule {}
