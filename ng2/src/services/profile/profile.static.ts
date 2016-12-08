/**
 * Profile static class
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 12/07/16
 */
/// <reference path="../../../node_modules/@types/lodash/index.d.ts" />
/// <reference path="./profile.d.ts" />

export class ProfileStatic implements ProfileInterface2 {
  id: string;
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
    this.id = 'windmaomao';
    this.url = 'https://www.linkedin.com/in/windmaomao';
    this.name = 'Fang Jin';
    this.title = 'Front-end Architect';
    this.email = 'windmaomao @ gmail';
    this.phone = '(949) 302-7928';
    this.location = 'Raleigh, North Carolina';
    this.description = 'I specialize in developing websites in healthcare, banking, real estate and university sectors. Overall my projects have reached 11 million users in production. I enjoy drafting and architecting front facing websites that talk to large enterprise dataset, most of time involving <em>UI/UX</em> design tailored for your business workflow.';
    this.keywords = ['AngularJS', 'Sass', 'Bootstrap', 'Gulp', 'Git'];

    this.sections = {
      professional: {
        name: 'professional',
        title: 'Professional',
        subtitle: '',
        icon: '',
      },
      education: {
        name: 'education',
        title: 'Education',
        subtitle: '',
        icon: '',
      },
      activity: {
        name: 'activity',
        title: 'Activities',
        subtitle: '',
        icon: '',
      },
      recommend: {
        name: 'recommend',
        title: 'Recommend <span class="badge">13</span>',
        subtitle: '<a href="https://www.linkedin.com/in/windmaomao" target="_blank" title="More from LinkedIN"><i class="icon ion-social-linkedin"></i></a>',
        icon: 'bullhorn',
      },
      experience: {
        current: {
          name: 'experience-current',
          title: 'Work Experience',
          subtitle: '2010 - current',
          icon: 'slideshare',
        },
        before: {
          name: 'experience-before',
          title: 'Work Experience',
          subtitle: '2000 - 2010',
          icon: 'slideshare',
        }
      },
      skillset: {
        architect: {
          name: 'skillset-architect',
          title: 'Skillset',
          subtitle: 'UI/UX Architect',
          icon: 'balance-scale',
        },
        component: {
          name: 'skillset-component',
          title: 'Skillset',
          subtitle: 'UI/UX Component',
          icon: 'comments-o',
        }
      }
    };
  }
}
