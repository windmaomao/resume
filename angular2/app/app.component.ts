/**
 * App component module
 * App component serves as layout container including
 * all child components such as navbar, header, footer
 * as well as route view entry
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/08/16
 */
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
      <router-outlet></router-outlet>
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
