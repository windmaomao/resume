/**
 * Update component module
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 11/15/16
 */
import { Component } from '@angular/core';
import { ProfileStoreService } from '../app.service';

@Component({
  selector: 'cv-update',
  inputs: [],
  template: `
    <h2>Edit</h2>
    <button class="btn btn-primary" (click)="onGetProfile()">Edit</button>
    <p>{{ profile | json }}</p>
  `
})
export class CVUpdateComponent {
  _ps: any;
  profile: any;
  constructor(private ps: ProfileStoreService) {
    this._ps = ps;
    this.profile = ps.getProfile();
  }
  onGetProfile() {
    // this.profile = this._ps.getProfile();
  }
  onAddProfile() {
    // var p = {
    //   name: 'todo lists'
    // };
    // this._ps.addProfile(p);
  }
}
