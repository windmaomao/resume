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
  templateUrl: './profile.update.html'
})
export class CVUpdateComponent {
  private _ps: any;
  profile: any;
  constructor(private ps: ProfileStoreService) {
    this._ps = ps;
    this.profile = ps.profile;
  }
  onUpdateProfile() {
    this._ps.save().then(() => {
      this._ps.load();
    });
  }
}
