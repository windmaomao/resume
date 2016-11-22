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
  // profile: any;
  constructor(private pm: ProfileModelService) {
    this._pm = pm;
    // this.profile = ps.profile;
  }
  onUpdateProfile() {
    // this._ps.save().then(() => {
    //   this._ps.load();
    // });
  }
}
