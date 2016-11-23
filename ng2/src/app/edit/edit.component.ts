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
    this.experience = {};
    this.resetExperience();

    let edit = this;
    pm.load().then((res) => {
      console.log('Profile', res);
    });
  }
  resetExperience() {
    _.merge(this.experience, {
      profile: this._pm.id,
      id: "", rev: "",
      title: "", period: ""
    });
  }
  onUpdateExperience() {
    this._pm.save('experience', _.cloneDeep(this.experience));
    this.resetExperience();
  }
  onSelectExperience(exp) {
    _.merge(this.experience, exp);
  }
  onUpdateProfile() {
    // this._ps.save().then(() => {
    //   this._ps.load();
    // });
  }
}
