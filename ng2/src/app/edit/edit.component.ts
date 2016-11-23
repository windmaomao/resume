/**
 * Edit component module
 * Profile editing page
 * including main profile and all other sections
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 11/22/16
 */
import { Component } from '@angular/core';
import { ProfileModelService } from '../profile/profile.service';

@Component({
  selector: 'cv-edit',
  inputs: [],
  templateUrl: './profile.edit.html'
})
export class CVEditComponent {
  private _pm: any;
  data: any;
  profile: any;
  constructor(private pm: ProfileModelService) {
    this._pm = pm;
    this.data = this._pm.data;
    this.profile = this.data.profiles[0];
    let edit = this;
    pm.load().then((res) => {
      console.log('Profile', res);
    });
  }
  onUpdateProfile() {
    // this._ps.save().then(() => {
    //   this._ps.load();
    // });
  }
}
