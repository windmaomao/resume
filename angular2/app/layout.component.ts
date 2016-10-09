import { Component } from '@angular/core';
import { ProfileService } from './profile/profile.service';

@Component({
  selector: 'cv-navbar',
  templateUrl: 'templates/layout.navbar.html'
})
export class CVNavbarComponent { }

@Component({
  selector: 'cv-version',
  templateUrl: 'templates/layout.version.html'
})
export class CVVersionComponent { }

@Component({
  selector: 'cv-header',
  templateUrl: 'templates/layout.header.html',
  providers: [ProfileService]
})
export class CVHeaderComponent {
  profile: any;
  constructor(private profileService: ProfileService) {
    this.profile = profileService;
  }
}

@Component({
  selector: 'cv-footer',
  templateUrl: 'templates/layout.footer.html'
})
export class CVFooterComponent { }
