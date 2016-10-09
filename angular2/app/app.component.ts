import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <cv-navbar></cv-navbar>
    <div class="container" id="wrap">
      <cv-version></cv-version>
      <cv-header></cv-header>
      <cv-recommend></cv-recommend>
      <cv-footer></cv-footer>
    </div>
  `
})
export class AppComponent { }
