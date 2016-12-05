/**
 * Page component module
 * Components inside main page body
 * including components from various sections
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/09/16
 */
import { Component }          from '@angular/core';
import { ProfileService }     from '../../services/profile';

@Component({
  selector: 'page',
  template: `
    <cv-profile></cv-profile>
    <router-outlet></router-outlet>
  `,
})
export class PageComponent { }

@Component({
  template: `Page content`
})
export class TestComponent { }

@Component({
  selector: 'cv-profile',
  templateUrl: './page.header.html',
})
export class ProfileComponent {
  constructor(private profile: ProfileService) {
    this.profile = profile;
  }
}

@Component({
  selector: 'cv-section',
  inputs: ['section'],
  templateUrl: './page.section.html'
})
export class SectionComponent { }

@Component({
  selector: 'description',
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
export class DescriptionComponent {
  sections: any[];
  constructor(private profile: ProfileService) {
    this.sections = profile.sections;
  }
}

@Component({
  selector: 'cv-recommend',
  inputs: ['section'],
  template: `
    <hr />
    <cv-section [section]="section"></cv-section>
  `
})
export class RecommendComponent {
  section: any;
  constructor(private profile: ProfileService) {
    this.section = profile.sections.recommend;
  }
}

@Component({
  selector: 'cv-timeline-current',
  templateUrl: './timeline.current.html'
})
export class TimelineCurrentComponent { }

@Component({
  selector: 'cv-timeline-before',
  templateUrl: './timeline.before.html'
})
export class TimelineBeforeComponent { }

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
export class ExperienceComponent {
  sections: any[];
  constructor(private profile: ProfileService) {
    this.sections = profile.sections.experience;
  }
}

@Component({
  selector: 'cv-grid-architect',
  templateUrl: './grid.architect.html'
})
export class GridArchitectComponent { }

@Component({
  selector: 'cv-grid-component',
  templateUrl: './grid.component.html'
})
export class GridComponentComponent { }

@Component({
  selector: 'cv-architect',
  inputs: ['section'],
  template: `
    <hr />
    <cv-grid-architect></cv-grid-architect>
    <cv-section [section]="section"></cv-section>
  `
})
export class ArchitectComponent {
  section: any;
  constructor(private profile: ProfileService) {
    this.section = profile.sections.skillset.architect;
  }
}

@Component({
  selector: 'cv-component',
  inputs: ['section'],
  template: `
    <hr />
    <cv-grid-component></cv-grid-component>
    <cv-section [section]="section"></cv-section>
  `
})
export class ComponentComponent {
  section: any;
  constructor(private profile: ProfileService) {
    this.section = profile.sections.skillset.component;
  }
}
