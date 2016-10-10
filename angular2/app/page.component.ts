import { Component } from '@angular/core';

@Component({
  selector: 'cv-description',
  inputs: ['profile'],
  templateUrl: 'templates/page.description.html'
})
export class CVDescriptionComponent { }

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
