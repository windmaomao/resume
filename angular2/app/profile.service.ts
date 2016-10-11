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
  sections: any;

  constructor() {
    this.url = 'https://www.linkedin.com/in/windmaomao';
    this.name = 'Fang Jin';
    this.title = 'Front-end Architect';
    this.email = 'windmaomao @ gmail';
    this.phone = '(949) 302-7928';
    this.location = 'Raleigh, North Carolina';
    this.description = 'I specialize in developing websites in healthcare, banking, real estate and university sectors. Overall my projects have reached 11 million users in production. I enjoy drafting and architecting front facing websites that talk to large enterprise dataset, most of time involving <em>UI/UX</em> design tailored for your business workflow.';
    this.keywords = ['AngularJS', 'Sass', 'Bootstrap', 'Gulp', 'Git'];

    this.sections = {
      recommend: {
        title: 'Recommend',
        subtitle: '<a href="https://www.linkedin.com/in/windmaomao" target="_blank" title="More from LinkedIN"><i class="icon ion-social-linkedin"></i></a>',
        icon: 'bullhorn',
        items: this.recommends()
      }
    };
  }

  recommends() {
    return [
      {
        title: 'John Crawford',
        subtitle: 'Co Founder and CTO at ndustrial.io',
        description: "We had Fang come in and help us get an admin portal up and running so we could more easily manage our system. He immediately started contributing and he obviously knew what he was doing when it came to <em>AngularJs</em>. He also helped us <strong>improve our existing libraries</strong> and wasn't afraid to give us pointers on how they could be improved -- a very good quality in a programmer. He has given us a very good foundation to build our application on going forward and we appreciate his hard work.",
        note: 'July 26, 2015, John managed Fang at ndustrial.io'
      }
    ];
  }
}
