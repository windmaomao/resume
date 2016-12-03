/**
 * App components
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/15/16
 */
import { Component } from '@angular/core';
import { ProfileService } from './app.service';

/**
 * App component
 * root component for HTML page entry
 */
@Component({
  selector: 'app-root',
  template: `
    <h1>Root</h1>
    <layout></layout>
  `,
  // <cv-layout [profile]="profile"></cv-layout>
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
  // profile: any;
  // constructor(private profileService: ProfileService) {
  //   this.profile = profileService;
  // }
}

/**
 * App test component
 */
@Component({
  // selector: 'app-root',
  template: `
    Test Content
  `
})
export class AppTestComponent {
  constructor() {}
}
