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
import * as _ from "lodash";

@Component({
  selector: 'cv-edit',
  inputs: [],
  templateUrl: './profile.edit.html'
})
export class CVEditComponent {
  private _pm: any;
  data: any;
  profile: any;
  experience: any;
  constructor(private pm: ProfileModelService) {
    this._pm = pm;
    this.data = this._pm.data;
    this.profile = this.data.profiles[0];
    this.onResetExperience();
    this.onLoadProfile();
  }
  onLoadProfile() {
    return this._pm.load().then((res) => {
      console.log('Profile', res);
    });
  }
  onUpdateProfile() {
    let edit = this;
    return this._pm.save('profile', this.profile).then(() => {
    });
  }
  onResetExperience() {
    this.experience = {
      profile: this._pm.id,
      id: "", rev: "",
      title: "", period: ""
    };
  }
  onUpdateExperience() {
    let edit = this;
    return this._pm.save('experience', this.experience).then(() => {
      edit.onResetExperience();
    });
  }
  onSelectExperience(exp) {
    this.experience = exp;
  }
}
