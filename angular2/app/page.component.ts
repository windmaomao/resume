/**
 * Page component module
 * Components inside main page body
 * including components from various sections
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/09/16
 */
import { Component } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'cv-description',
  inputs: ['profile'],
  template: `
    <hr />
    <cv-section [section]="professional"></cv-section>
    <hr />
    <cv-section [section]="education"></cv-section>
    <hr />
    <cv-section [section]="activity"></cv-section>
  `
})
export class CVDescriptionComponent {
  professional: any;
  education: any;
  activity: any;
  constructor(private profile: ProfileService) {
    this.professional = profile.sections.professional;
    this.education = profile.sections.education;
    this.activity = profile.sections.activity;
  }
}

@Component({
  selector: 'cv-recommend',
  template: `
    <hr />
    <cv-section [section]="recommend"></cv-section>
  `
})
export class CVRecommendComponent {
  recommend: any;
  constructor(private profile: ProfileService) {
    this.recommend = profile.sections.recommend;
  }
}

@Component({
  selector: 'cv-experience',
  template: `
    <hr />
    <cv-timeline-current></cv-timeline-current>
    <cv-section [section]="current"></cv-section>
    <hr />
    <cv-timeline-before></cv-timeline-before>
    <cv-section [section]="before"></cv-section>
  `
})
export class CVExperienceComponent {
  current: any;
  before: any;
  constructor(private profile: ProfileService) {
    this.current = profile.sections.experience.current;
    this.before = profile.sections.experience.before;
  }
}

@Component({
  selector: 'cv-architect',
  template: `
  <hr />
  <cv-grid-architect></cv-grid-architect>
  <cv-section [section]="architect"></cv-section>
  `
})
export class CVArchitectComponent {
  architect: any;
  constructor(private profile: ProfileService) {
    this.architect = profile.sections.skillset.architect;
  }
}

@Component({
  selector: 'cv-component',
  template: `
  <hr />
  <cv-grid-component></cv-grid-component>
  <cv-section [section]="component"></cv-section>
  `
})
export class CVComponentComponent {
  component: any;
  constructor(private profile: ProfileService) {
    this.component = profile.sections.skillset.component;
  }
}

@Component({
  selector: 'cv-misc',
  templateUrl: 'templates/page.misc.html'
})
export class CVMiscComponent { }
