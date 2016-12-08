/**
 * Edit component module
 * Profile editing page
 * including main profile and all other sections
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 11/22/16
 */
import { Component } from '@angular/core';
import { ProfileModelService } from '../../services/profile/profile.model.service';
import * as _ from "lodash";

@Component({
  selector: 'cv-edit',
  inputs: [],
  template: `
    <br />
    <cv-profile-edit></cv-profile-edit>
    <cv-section-edit></cv-section-edit>
    <cv-experience-edit></cv-experience-edit>
  `
})
export class EditComponent {
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
export class ProfileEditComponent {
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
  selector: 'cv-section-edit',
  inputs: [],
  templateUrl: './section.edit.html'
})
export class SectionEditComponent {
  private _pm: any;
  section: any;
  mode: string;
  constructor(private pm: ProfileModelService) {
    this._pm = pm;
    this.onInit(false);
  }
  get sections() {
    _.assign(this._pm.data.sections,
      _.sortBy(this._pm.data.sections, ['order']));
    return this._pm.data.sections;
  }
  onInit(on) {
    this.section = {
      profile: this._pm.id,
      id: "", rev: "",
      name: "", title: "", order: 0
    };
    this.mode = on;
  }
  onSelect(section) {
    this.section = section;
    this.mode = 'edit';
  }
  onUpdate() {
    let edit = this;
    if (!this.section.title) {
      this.section.title = _.startCase(_.toLower(this.section.name));
    }
    return this._pm.save('section', this.section).then(() => {
      edit.onInit(false);
    });
  }
  onDelete() {
    let edit = this;
    return this._pm.del('section', this.section).then(() => {
      edit.onInit(false);
    });
  }
}

@Component({
  selector: 'cv-experience-edit',
  inputs: [],
  templateUrl: './experience.edit.html'
})
export class ExperienceEditComponent {
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
      title: "", period: "", location: ""
    };
    this.mode = on;
  }
  onSelect(exp) {
    this.experience = exp;
    this.mode = 'edit';
  }
  onUpdate() {
    // assign a fixed id
    // if (!this.experience.id) {
    //   this.experience.id = _.camelCase(this.experience.title);
    // }
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
