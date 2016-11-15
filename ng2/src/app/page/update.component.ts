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
    <button class="btn btn-primary" (click)="onGetProfile()">Get profile</button>
    <button class="btn btn-danger" (click)="onAddProfile()">Add profile</button>
    <p>{{ profile | json }}</p>
  `
})
export class CVUpdateComponent {
  _ps: any;
  profile: any;
  constructor(private ps: ProfileStoreService) {
    this._ps = ps;
  }
  onGetProfile() {
    // this.profile = 'abc';
    this.profile = this._ps.getProfile();
  }
}
