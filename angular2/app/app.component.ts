import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<cv-navbar></cv-navbar>',
})
export class AppComponent { }

@Component({
  selector: 'cv-navbar',
  templateUrl: 'templates/layout.navbar.html'
})
export class CVNavbarComponent { }
