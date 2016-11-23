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
  private _profile: any;
  experience: any;
  experienceEdit: any;
  constructor(private pm: ProfileModelService) {
    this._pm = pm;
    this.data = this._pm.data;
    this.onResetExperience(false);
    this.onLoadProfile();
  }
  get profile() {
    return this.data.profiles[0];
  }
  onLoadProfile() {
    let edit = this;
    return this._pm.load('profile');
  }
  onUpdateProfile() {
    return this._pm.save('profile', this.profile);
  }
  onResetExperience(on) {
    this.experience = {
      profile: this._pm.id,
      id: "", rev: "",
      title: "", period: ""
    };
    this.experienceEdit = on;
  }
  onSelectExperience(exp) {
    this.experience = exp;
    this.experienceEdit = 'edit';
  }
  onUpdateExperience() {
    let edit = this;
    return this._pm.save('experience', this.experience).then(() => {
      edit.onResetExperience(false);
    });
  }
  onDeleteExperience() {
    let edit = this;
    return this._pm.del('experience', this.experience).then(() => {
      edit.onResetExperience(false);
    });
  }
}
