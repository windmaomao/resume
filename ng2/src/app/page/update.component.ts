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
    <h2>Update CV</h2>
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" [(ngModel)]="profile.name" name="name" />
          </div>
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" [(ngModel)]="profile.title" name="title" />
          </div>
        </form>
        <button type="submit" class="btn btn-primary" (click)="onUpdateProfile()">Update</button>
      </div>
    </div>
    <p>{{ profile | json }}</p>
  `
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
