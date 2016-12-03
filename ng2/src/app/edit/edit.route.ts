/**
 * Edit routes
 * Define edit routes
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 12/03/16
 */
import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { EditComponent }          from './edit.component';

export const editRoutes: Routes = [
  {
    path: 'edit',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(editRoutes)],
  exports: [RouterModule]
})
export class EditRouteModule {}
