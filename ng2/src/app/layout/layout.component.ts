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
  `,
})
export class CVLayoutComponent { }

@Component({
  selector: 'cv-navbar',
  templateUrl: './layout.navbar.html'
})
export class CVNavbarComponent { }

// @Component({
//   selector: 'cv-version',
//   templateUrl: 'templates/layout.version.html'
// })
// export class CVVersionComponent { }
//
// @Component({
//   selector: 'cv-header',
//   inputs: ['profile'],
//   templateUrl: 'templates/layout.header.html',
// })
// export class CVHeaderComponent { }
//
// @Component({
//   selector: 'cv-footer',
//   templateUrl: 'templates/layout.footer.html'
// })
// export class CVFooterComponent { }
