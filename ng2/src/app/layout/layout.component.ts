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
  selector: 'layout',
  // inputs: ['profile'],
  template: `
    <navbar></navbar>
    <div class="container" id="wrap">
      <version></version>
      <router-outlet></router-outlet>
      <footer></footer>
    </div>
  `,

  // <cv-navbar></cv-navbar>
  // <div class="container" id="wrap">
  //   <cv-version></cv-version>
  //   <router-outlet></router-outlet>
  //   <cv-footer></cv-footer>
  // </div>

  // <cv-description [sections]="profile.sections"></cv-description>
  // <cv-recommend [section]="profile.sections.recommend"></cv-recommend>
  // <cv-experience [sections]="profile.sections.experience"></cv-experience>
  // <cv-architect [section]="profile.sections.skillset.architect"></cv-architect>
  // <cv-component [section]="profile.sections.skillset.component"></cv-component>
})
export class LayoutComponent { }

@Component({
  selector: 'navbar',
  templateUrl: './layout.navbar.html'
})
export class NavbarComponent { }

@Component({
  selector: 'version',
  templateUrl: './layout.version.html'
})
export class VersionComponent { }

@Component({
  selector: 'footer',
  templateUrl: './layout.footer.html'
})
export class FooterComponent { }
