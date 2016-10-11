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
        name: 'recommend',
        title: 'Recommend <span class="badge">13</span>',
        subtitle: '<a href="https://www.linkedin.com/in/windmaomao" target="_blank" title="More from LinkedIN"><i class="icon ion-social-linkedin"></i></a>',
        icon: 'bullhorn',
        items: this.recommends(),
      }
    };
  }

  recommends() {
    return [
      {
        title: 'John Crawford',
        subtitle: 'Co Founder and CTO at ndustrial.io',
        description: "We had Fang come in and help us get an admin portal up and running so we could more easily manage our system. He immediately started contributing and he obviously knew what he was doing when it came to <em>AngularJs</em>. He also helped us <strong>improve our existing libraries</strong> and wasn't afraid to give us pointers on how they could be improved -- a very good quality in a programmer. He has given us a very good foundation to build our application on going forward and we appreciate his hard work. ",
        note: 'July 26, 2015, John managed Fang at <a href="http://www.ndustrial.io/" target="_blank">ndustrial.io</a>'
      },
      {
        title: 'Steve Doyle',
        subtitle: 'President and CEO of NewStone Realty, LLC & Finder411',
        description: "I found Fang Jin on-line; I was looking for a web developer to help me launch a newer version of my website. I arranged a meeting with Fang and found him to be very knowledgeable and helpful. It was important to me that I could participate, going forward, in continued web improvements. After discussions with Fang, he convinced me of an alternative development strategy and now, in hind-site, that was absolutely the right call.&nbsp;Fang has a <strong>deep understand of web development and execution</strong> and was a quick study when it came time to integrate another vendor's application. In just a matter of weeks, I was up and running with my new site. Great communication and solid integrity.",
        note: 'March 3, 2015, Steve was Fang\'s client for <a href="newstonerealty.com" target="_blank">newstonerealty.com</a>'
      },
      {
        title: 'Tasha Dular',
        subtitle: 'Entrepreneur/Front-end Developer',
        description: "Fang is an excellence back-end developer with front-end development skills. He is always willing to learn and take on new technologies. He is very easy to work with and dedicated. While working with Fang I noticed that he was interested in <strong>using new technologies to make development faster and easier for the whole team</strong>. Fang is a leader in identifying road blocks in the development process and usability. He diligently looks for solutions and will create terrific documentation to lead forward with a new project/concept that includes new coding methods/standards to make the would develop prototypes of concepts for charts for outputting and organizing data in a creative way based on Designs. I would highly recommend working with Fang in the future. ",
        note: 'January 4, 2015, Tasha worked directly with Fang at <a href="https://www.rxante.com/" target="_blank">RxAnte,</a> LLC '
      },
      {
        title: 'Gabe Fahi',
        subtitle: 'IT Analyst at Duke University',
        description: "At Duke, I worked with Fang on a couple of projects. During each project, not only did he demonstrate exceptional knowledge of the tools at hand, but he also exhibited a <strong>deep understanding of the requirements and challenges that he faced</strong>. He is incredibly talented when it comes to any aspect of a project: interpreting the needs of the client; suggesting ideas for implementation; providing quick turnaround time; etc... Fang also showed great excitement and interest for technology outside the scope of the project. He was always eager to show off or talk about some new demo he had been working&nbsp;on in his spare time. I always looked forward to hearing him talk about his newest interest. Fang is very personable and quite knowledgeable on all aspects of technology, whether it be front-end design, programming or server configuration/setup. It was a real pleasure working with him. ",
        note: 'October 18, 2014, Gabe was with another company when working with Fang building <a href="https://trinity.duke.edu/" target="_blank">Duke Trinity</a> '
      },
      {
        title: 'Tyler Radford',
        subtitle: 'Executive Director at Humanitarian OpenStreetMap Team',
        description: "Fang volunteered for the International Center for Disaster Recovery during September and October 2014. He helped us begin to <strong>move our proof of concept for RecoveryHub (using <em>Drupal</em> Commons 3.0) toward a robust, deployable solution</strong>. Fang created a framework for us using Drupal's Features that will allow us to modify and enhance our site in the future more easily. He quickly learned technologies that we were using such as Apache Solr. One of the things that we appreciated about Fang is that he always took a \"big picture\" view of our project and advised us on different options to take, rather than simply proceed without asking questions. He thoroughly explained the pros and cons of each option, making him a trusted team member and adviser. Fang will be well suited for future senior architect or developer roles.",
        note: 'November 14, 2014, Tyler managed Fang at RecoveryHub | <a href="http://recoveryhub.net/" target="_blank">www.recoveryhub.net</a>'
      },
      {
        title: 'David Pfeiffenberger',
        subtitle: 'President / COO of PlusDelta Technologies',
        description: "Fang is one of the most talented software developer / architecture individual I have ever met. His ability to take vague customer requirements and turn them into a fantastic software solution never ceased to amaze me. He continually went above and beyond to <strong>solve complex problems with very thoughtful, simple, and robust solutions</strong>. His ability to quickly comprehend issues, formulate a plan, and execute a solution are one of the best I've every seen! I would recommend Fang for any organization looking for Drupal and/or general programming assistance!",
        note: 'September 10, 2013, David managed Fang at <a href="http://www.plusdeltatech.com/" target="_blank">PlusDelta Technologies</a>'
      },
    ];
  }
}
