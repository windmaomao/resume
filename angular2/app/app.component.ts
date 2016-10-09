import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <cv-navbar></cv-navbar>
    <div class="container" id="wrap">
      <cv-version></cv-version>
      <cv-header></cv-header>
      <cv-footer></cv-footer>
    </div>
  `
})
export class AppComponent { }

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
  templateUrl: 'templates/layout.header.html'
})
export class CVHeaderComponent {
  profile: any;

  constructor() {
    this.profile = {
      url: 'https://www.linkedin.com/in/windmaomao',
      name: 'Fang Jin',
      title: 'Front-end Architect',
      email: 'windmaomao @ gmail',
      phone: '(949) 302-7928',
      location: 'Raleigh, North Carolina',
    };
  }
}

@Component({
  selector: 'cv-footer',
  templateUrl: 'templates/layout.footer.html'
})
export class CVFooterComponent { }
