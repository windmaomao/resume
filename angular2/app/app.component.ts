import { Component } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'my-app',
  providers: [ProfileService],
  template: `
    <cv-navbar></cv-navbar>
    <div class="container" id="wrap">
      <cv-version></cv-version>
      <cv-header [profile]="profile"></cv-header>
      <cv-description [profile]="profile"></cv-description>
      <cv-recommend></cv-recommend>
      <cv-experience></cv-experience>
      <cv-footer></cv-footer>
    </div>
  `
})
export class AppComponent {
  profile: any;
  constructor(private profileService: ProfileService) {
    this.profile = profileService;
  }
}
