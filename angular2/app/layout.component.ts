import { Component } from '@angular/core';

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
  inputs: ['profile'],
  templateUrl: 'templates/layout.header.html',
})
export class CVHeaderComponent { }

@Component({
  selector: 'cv-footer',
  templateUrl: 'templates/layout.footer.html'
})
export class CVFooterComponent { }
