/**
 * Layout component module
 * Components used for page layouts,
 * such as navbar, version, header and footer
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/09/16
 */
import { Component } from '@angular/core';

@Component({
  selector: 'cv-layout',
  template: `
    <cv-navbar></cv-navbar>
    <div class="container" id="wrap">
      <cv-version></cv-version>
      <cv-header></cv-header>
      <cv-footer></cv-footer>
    </div>
  `,
})
export class CVLayoutComponent { }

@Component({
  selector: 'cv-navbar',
  templateUrl: './layout.navbar.html'
})
export class CVNavbarComponent { }

@Component({
  selector: 'cv-version',
  templateUrl: './layout.version.html'
})
export class CVVersionComponent { }

@Component({
  selector: 'cv-header',
  templateUrl: './layout.header.html',
})
export class CVHeaderComponent { }

@Component({
  selector: 'cv-footer',
  templateUrl: './layout.footer.html'
})
export class CVFooterComponent { }
