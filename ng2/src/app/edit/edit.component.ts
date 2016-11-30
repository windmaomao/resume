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
  templateUrl: './edit.html'
})
export class CVEditComponent {
  private _pm: any;
  constructor(private pm: ProfileModelService) {
    this._pm = pm;
    this.onLoad();
  }
  onLoad() {
    return this._pm.load('profile');
  }
}

@Component({
  selector: 'cv-profile-edit',
  inputs: [],
  templateUrl: './profile.edit.html'
})
export class CVProfileEditComponent {
  private _pm: any;
  constructor(private pm: ProfileModelService) {
    this._pm = pm;
  }
  get profile() {
    return this._pm.data.profiles[0];
  }
  onUpdate() {
    return this._pm.save('profile', this.profile);
  }
}

@Component({
  selector: 'cv-experience-edit',
  inputs: [],
  templateUrl: './experience.edit.html'
})
export class CVExperienceEditComponent {
  private _pm: any;
  experience: any;
  mode: string;
  constructor(private pm: ProfileModelService) {
    this._pm = pm;
    this.onInit(false);
  }
  get experiences() {
     _.assign(this._pm.data.experiences,
       _.sortBy(this._pm.data.experiences, ['order']));
    //  this._pm.data.experiences =
    //    _.sortBy(this._pm.data.experiences, ['order']);
    return this._pm.data.experiences;
  }
  onInit(on) {
    this.experience = {
      profile: this._pm.id,
      id: "", rev: "",
      title: "", period: ""
    };
    this.mode = on;
  }
  onSelect(exp) {
    this.experience = exp;
    this.mode = 'edit';
  }
  onUpdate() {
    let edit = this;
    return this._pm.save('experience', this.experience).then(() => {
      edit.onInit(false);
    });
  }
  onDelete() {
    let edit = this;
    return this._pm.del('experience', this.experience).then(() => {
      edit.onInit(false);
    });
  }
}
