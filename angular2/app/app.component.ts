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
export class CVHeaderComponent { }

@Component({
  selector: 'cv-footer',
  templateUrl: 'templates/layout.footer.html'
})
export class CVFooterComponent { }
