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
  templateUrl: 'templates/page.description.html'
})
export class CVDescriptionComponent {
  constructor(private profile: ProfileService) { }
}

@Component({
  selector: 'cv-recommend',
  templateUrl: 'templates/page.recommend.html'
})
export class CVRecommendComponent { }

@Component({
  selector: 'cv-experience',
  templateUrl: 'templates/page.experience.html'
})
export class CVExperienceComponent { }

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
