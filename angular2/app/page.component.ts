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
