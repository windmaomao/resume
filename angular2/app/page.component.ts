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
  // templateUrl: 'templates/page.description.html'
  template: `
    <cv-section [section]="professional"></cv-section>
    <cv-section [section]="education"></cv-section>
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
  // templateUrl: 'templates/page.recommend.html'
  template: '<cv-section [section]="recommend"></cv-section>'
})
export class CVRecommendComponent {
  recommend: any;
  constructor(private profile: ProfileService) {
    this.recommend = profile.sections.recommend;
  }
}

@Component({
  selector: 'cv-experience',
  // templateUrl: 'templates/page.experience.html'
  template: `
    <cv-timeline-current></cv-timeline-current>
    <cv-section [section]="current"></cv-section>
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
  templateUrl: 'templates/page.architect.html'
})
export class CVArchitectComponent { }

@Component({
  selector: 'cv-component',
  templateUrl: 'templates/page.component.html'
})
export class CVComponentComponent { }

@Component({
  selector: 'cv-misc',
  templateUrl: 'templates/page.misc.html'
})
export class CVMiscComponent { }
