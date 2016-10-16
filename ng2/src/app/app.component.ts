import { Component } from '@angular/core';
import { ProfileService } from './app.service';

@Component({
  selector: 'app-root',
  template: `
    <cv-layout [profile]="profile"></cv-layout>
  `,
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  profile: any;
  constructor(private profileService: ProfileService) {
    this.profile = profileService;
  }
}
