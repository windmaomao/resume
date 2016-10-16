/**
 * Page component module
 * Components inside main page body
 * including components from various sections
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/09/16
 */
import { Component } from '@angular/core';

@Component({
  selector: 'cv-section',
  inputs: ['section'],
  templateUrl: './page.section.html'
})
export class CVSectionComponent { }

@Component({
  selector: 'cv-description',
  inputs: ['sections'],
  template: `
    <hr />
    <cv-section [section]="sections.professional"></cv-section>
    <hr />
    <cv-section [section]="sections.education"></cv-section>
    <hr />
    <cv-section [section]="sections.activity"></cv-section>
  `
})
export class CVDescriptionComponent { }

@Component({
  selector: 'cv-recommend',
  inputs: ['section'],
  template: `
    <hr />
    <cv-section [section]="section"></cv-section>
  `
})
export class CVRecommendComponent { }

@Component({
  selector: 'cv-timeline-current',
  templateUrl: './timeline.current.html'
})
export class CVTimelineCurrentComponent { }

@Component({
  selector: 'cv-timeline-before',
  templateUrl: './timeline.before.html'
})
export class CVTimelineBeforeComponent { }

@Component({
  selector: 'cv-experience',
  inputs: ['sections'],
  template: `
    <hr />
    <cv-timeline-current></cv-timeline-current>
    <cv-section [section]="sections.current"></cv-section>
    <hr />
    <cv-timeline-before></cv-timeline-before>
    <cv-section [section]="sections.before"></cv-section>
  `
})
export class CVExperienceComponent { }

// @Component({
//   selector: 'cv-architect',
//   template: `
//   <hr />
//   <cv-grid-architect></cv-grid-architect>
//   <cv-section [section]="architect"></cv-section>
//   `
// })
// export class CVArchitectComponent {
//   architect: any;
//   constructor(private profile: ProfileService) {
//     this.architect = profile.sections.skillset.architect;
//   }
// }
//
// @Component({
//   selector: 'cv-component',
//   template: `
//   <hr />
//   <cv-grid-component></cv-grid-component>
//   <cv-section [section]="component"></cv-section>
//   `
// })
// export class CVComponentComponent {
//   component: any;
//   constructor(private profile: ProfileService) {
//     this.component = profile.sections.skillset.component;
//   }
// }
//
// @Component({
//   selector: 'cv-misc',
//   templateUrl: 'templates/page.misc.html'
// })
// export class CVMiscComponent { }
