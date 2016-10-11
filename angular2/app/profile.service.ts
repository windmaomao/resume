/**
 * Profile service module
 * Profile object for all resume info
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/10/16
 */
import {Injectable} from '@angular/core';

@Injectable()
export class ProfileService {
  url: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  description: string;
  keywords: string[];
  constructor() {
    this.url = 'https://www.linkedin.com/in/windmaomao';
    this.name = 'Fang Jin';
    this.title = 'Front-end Architect';
    this.email = 'windmaomao @ gmail';
    this.phone = '(949) 302-7928';
    this.location = 'Raleigh, North Carolina';
    this.description = 'I specialize in developing websites in healthcare, banking, real estate and university sectors. Overall my projects have reached 11 million users in production. I enjoy drafting and architecting front facing websites that talk to large enterprise dataset, most of time involving <em>UI/UX</em> design tailored for your business workflow.';
    this.keywords = ['AngularJS', 'Sass', 'Bootstrap', 'Gulp', 'Git'];
  }
}
