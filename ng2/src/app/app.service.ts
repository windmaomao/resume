/**
 * App services
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/10/16
 */
import {Injectable} from '@angular/core';

/**
 * Profile service
 * Profile object for all resume info
 */
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
      professional: {
        name: 'professional',
        title: 'Professional',
        subtitle: '',
        icon: '',
        items: this.professional()
      },
      education: {
        name: 'education',
        title: 'Education',
        subtitle: '',
        icon: '',
        items: this.education(),
      },
      activity: {
        name: 'activity',
        title: 'Activities',
        subtitle: '',
        icon: '',
        items: this.activities(),
      },
      recommend: {
        name: 'recommend',
        title: 'Recommend <span class="badge">13</span>',
        subtitle: '<a href="https://www.linkedin.com/in/windmaomao" target="_blank" title="More from LinkedIN"><i class="icon ion-social-linkedin"></i></a>',
        icon: 'bullhorn',
        items: this.recommends(),
      },
      experience: {
        current: {
          name: 'experience-current',
          title: 'Work Experience',
          subtitle: '2010 - current',
          icon: 'slideshare',
          items: this.experienceCurrent(),
        },
        before: {
          name: 'experience-before',
          title: 'Work Experience',
          subtitle: '2000 - 2010',
          icon: 'slideshare',
          items: this.experienceBefore(),
        }
      },
      skillset: {
        architect: {
          name: 'skillset-architect',
          title: 'Skillset',
          subtitle: 'UI/UX Architect',
          icon: 'balance-scale',
          items: this.skillsetArchitect(),
        },
        component: {
          name: 'skillset-component',
          title: 'Skillset',
          subtitle: 'UI/UX Component',
          icon: 'comments-o',
          items: this.skillsetComponent(),
        }
      },

    };
  }

  professional() {
    return [
      {
        description: "I specialize in developing websites in healthcare, banking, real estate and university sectors. Overall my projects have reached 11 million users in production. I enjoy drafting and architecting front facing websites that talk to large enterprise dataset, most of time involving <em>UI/UX</em> design tailored for your business workflow.",
        keywords: ['AngularJS', 'Sass', 'Bootstrap', 'Gulp', 'Git'],
        footer: 'You can find more information here on my <a ng-reflect-router-link="/experience" ng-reflect-href="#/experience" href="#/experience">project experience</a> , <a ng-reflect-router-link="/architect" ng-reflect-href="#/architect" href="#/architect">architect skills</a> as well as list of <a ng-reflect-router-link="/component" ng-reflect-href="#/component" href="#/component">business components</a> that I have worked with.'
      }
    ];
  }

  education() {
    return [
      {
        title: 'Johns Hopkins University',
        subtitle: 'Bio-molecular chemical engineering, Ph.D.',
        description: "This is when I got chance with the advanced mathematic model. My job was to model water droplet dripping from the bathroom facet. Of course this was for NASA sponsored project, so this bathroom was on the moon with relatively smaller gravity ;) And later I took another project of modeling cancer cell migration inside human body.",
      }
    ]
  }

  activities() {
    return [
      {
        title: 'Volunteer site builder',
        subtitle: 'RecoveryHub for disaster and Humanitarian Relief',
        description: "After hurrican striked, lots of people lost home and they tried to find help on rebuilding their home. This is where I volunteered to build a site so that people can find useful information quickly during or after.",
      },
      {
        title: '"Multiscale Modeling of Cancer" book',
        subtitle: 'Co-author, Cambridge University Press, 2010',
        description: "My advisor wrote the book, andI participated in contributing two three chapters including mathematical modeling and computational framework for our cancer research. You can find this book at Amazon.com"
      },
      {
        title: 'Front cover picture design',
        subtitle: 'Author, Journal of Nonlinearity, 2010',
        description: "One of the challenge of cancer cell modeling is to visualize the vivid form formation and migration in realtime in 3D. I was fascinated on the visualization schema, and afterwards, the work is published as the front cover picture of Journal of Nonlinearity. You might be able to find this online."
      },
      {
        title: 'College math class teacher',
        subtitle: 'University of California Irvine',
        description: "I taught three semesters advanced college math class at UC Irvine when I took post doc there. The teaching experience taught me teaching and learning are two different aspects of life, both are art on itself."
      }
    ]
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

  experienceCurrent() {
    return [
      {
        title: 'Deutsche Bank, Cary NC',
        subtitle: 'AngularJS / NodeJS architect and UI/UX designer',
        period: 'Sep 2015 - Current',
        projects: [
          {
            description: "Provided <em>AngularJS</em> UI architect for GMI West AOF applications. Served as the tech lead and project manager of six team members (UIs, API, backend developers and business analysts). Large banking account open form, categorized by pages and regions, needs to be displayed, validated and submitted for end-users. I <strong>held morning standup meeting in daily basis, and provided demos to shareholder in weekly basis, as well as providing architect training for entry level UI developers</strong>. <small>since Jun 2016</small></p>",
            tasks: [
              'Theme Design: Extend <em>Bootstrap</em> following corporate theme guideline',
              'Front-end Build: <em>AngularJS</em> custom <strong><em>Gulp</em></strong> build within corporate infrastructure',
              'Hierarchy Routes: Book-like chapter navigation between different forms for multiple regions',
              'Form Design: Consistent form element between <em>IE/Chrome</em> browser, including radio, date and dropdown',
              'Continuous Integration: <em>Jenkins</em> deployment with every <em>Git</em> commit',
              'Fields Meta: Remapping of form fields and styling between API and UI',
              'Modular CSS: <em>CSS</em> framework extending bootstrap, other vendors and individual page components',
              'Modular JS: <em>AngularJS</em> framework with each feature linked as dependency',
              'Async Operations: series of async calls chained together to perform UI tasks',
              'Form validation: Validation driven by meta data provided by form API',
              'Page action: <em>Excel</em> like validation and action rules based on user input',
              'MVC Model: Extremely fat model design in <em>MVC</em> approach handling business logic'
            ]
          },
          {
            description: "Provided <em>NodeJS</em> backend / <em>AngularJS</em> UI for report delivery and SLA breach notification system for 1000 daily reports from US West and East region. I served as the lead architect and developer for data API, time critical SLA breach as well as batch email summary generation and delivery. <small>since Mar 2016 </small>",
            tasks: [
              'Prototype of admin UI with <em>webpack</em>&nbsp; ',
              'Responsive layout with material design ',
              'Establish entity model with configuration file ',
              'Grid style with grouping for large data exploration ',
              'Design API spec for <em>MVC</em> rest service with <em>Mongo</em> ',
              'Blueprint <em>MVC</em> routes with custom Kingslanding <em>NPM</em> ',
              'Design SLA notification process with <em>Cognos</em> ',
              'Multiple mixed level of serial and parallel process ',
              'Unified logging for all backend tasks ',
              'Streamlined data migration with excel in production environment ',
              'Efficient shared data pool for fetching data ',
              'Generation of report status email with summary table ',
              'Scriptable schedules with priority and concurrency ',
              'Plugin system for extendibility of backend system ',
            ]
          },
          {
            description: "Served as a lead front-end architect of <em>AngularJS </em>/ <em>NodeJS</em> and <em>UI/UX</em> for an enterprise statement 4-eyes-check solution for 25,000 customers worldwide. I also <strong>served as the sprint master for 8 people team (FA, QA, Dev and Owner etc.) in daily basis. I drafted the migration plan and collected the preliminary analysis</strong> on-boarding 25,000 users to the company banking entitlement system. <small>Since Sep 2015</small> ",
            tasks: [
              'Work with <em>Windows</em> environment ',
              'Design page layout with <em>sketch</em> ',
              'Design front-end framework with custom <em>grunt</em> build ',
              'Develop recipient email list directive ',
              'Unit test controller, directive and services ',
              'Generate code coverage 80% above ',
              'Perform parallel tasks on page load ',
              'Design multiple entity selector workflow ',
              'Add CSRF token protection for security ',
              'Add command line tool via flatiron ',
              'Work with <em>mongoDB</em> (monk) for bookkeeping ',
              'Work with <em>Oracle</em> database query and dump ',
              'Use request to issue service call to on-board user ',
            ]
          }
        ]
      },
      {
        title: 'Contracting',
        subtitle: 'Drupal, Laravel, and AngularJS Developer',
        period: 'Jun 2010 - Oct 2015',
        description: "Since 2010, I started to build professional website as a freelancer using <em>PHP </em>and <em>Drupal.</em> Between 2013 and 2015, I transitioned from a backend developer to front-end UI/UX developer. More than 20 applications have been developed and deployed commercially, mainly using <em>Drupal,</em> <em>Laravel</em> and <em>AngularJS</em>."
      },
      {
        title: 'Medicision, Raleigh NC',
        subtitle: 'AngularJS developer and UI/UX designer',
        period: 'July - Sep 2015',
        description: "Provided UI mockup and <em>AngularJS</em> architect for Automated service center tool that will allow sales to setup customer environments based on their needs.&nbsp;My job is to <strong>work with an account manager to find out the business need</strong>. Both UI and <em>AngularJS</em> architect are drafted for both desktop and mobile audience."
      },
      {
        title: 'NewStone Realty, Raleigh NC',
        subtitle: 'Lead AngularJS/NodeJS architect',
        period: 'Jan 2015 - Jun 2015',
        description: 'Provided <em>AngularJS</em> architect and development of current realty website, especially in providing new front-end and backend framework to support the existing unstructured HTML content.&nbsp; Visit live site <a href="newstonerealty.com" target="_blank"><i class="icon ion-android-home"></i> here </a>.'
      },
      {
        title: 'TopFitPro, Raleigh NC',
        subtitle: 'Lead AngularJS/NodeJS architect',
        period: 'Jan 2015 - Dec 2015',
        description: 'Provided <em>AngularJS</em> (front) and <em>NodeJS</em> (back) architect and development for recipe ingredients guide application where users are guided to select healthy food based on carbs, proteins, fats and other personal preference. Internal state machine is built so that user will be suggested with choices based on six guidance step by step. At each step, user might be stopped to ask to substitute with healthy food or adjust food quantities based on personal preference. '
      },
      {
        title: 'PeopleDesigns, Durham NC',
        subtitle: 'Lead Laravel and AngularJS developer',
        period: 'May 2014 - JUN 2015',
        projects: [
          {
            description: "Provided <em>AngularJS</em> (front) and <em>NodeJS</em> (back) architect and development for southern regional center of excellence in nutirion education and obesity prevention. An introduction website presents information on programs, constituents and question and answer forum on the front while in the back manager can update the information daily through the same unified UI. Both customer and manager can interact the site in a responsive way when manager have more permissions in updating their permitted content and managing the workflow. ",
            tasks: [
              'Theme Design: Prototyped with <em>Bootstrap</em> metronic responsive template ',
              'Fonte-end Prototype: AngularJS and <em>Bootstrap</em> custom modular development ',
              'Rest API: NodeJS setup for <em>Rest</em> API with support of JSON file for fast prototype ',
              'Token Based Authentication: NodeJS and <em>AngularJS</em> JWS token based authentication ',
              'Google Calendar Integration: Parse <em>Google</em> public calendar via feed and iCal ',
              'Questions and Comments: build-in question and commenting system ',
              'Unified UI: Same UI for backend and frontend two possible ways to manage contents ',
              'Map Integration: integrate <em>leaflet</em> map to display networks for selected US states ',
              'WYSIWYG Editor: Rich text editor with file attachment integration ',
              'File Management: Manage upload directory and files ',
              '<strong><em>WYSIWYG</em></strong> Extension: Insert local file or picture to <strong><em>WYSIWYG</em></strong><em> </em>editor ',
            ]
          },
          {
            description: "Provided Laravel 4 architect and development for new version of PrepareForYourCare, a hospital stage III counseling program to help people prepare the end of their life. The project creates flexible tree-kind chapters navigation with video/narration helper for elder visits. 200 doctors and 50,000 users around the globe have used the site. ",
            tasks: [
              'HIPPA Server: <em>HIPPA</em> server host and deployment plan protecting health care privacy ',
              'Authentication: Two factor <em>SMS</em> enabled authentication for better security protection ',
              'Password Recovery: Recovery based on either username or 3 out of 6 question answers ',
              '508 section: Disability compliance with video, and narration support with high contrast&nbsp; ',
              'Multilingual Support: Three language translations made for pages, snippets and graphics ',
              'Responsive Design: <em>Bootstrap</em> is used for fast prototype for desktop, iPad and other devices ',
              'Template Design: Allow manager to modify each page content stored in file storage ',
              'File Management: administer language files through web interface with easy switch ',
              'Browser Compatibility: Support <em>Chrome,</em> <em>Safari,</em> <em>Firefox</em> and <em>IE</em> 8, 9 and 10 ',
            ]
          }
        ]
      },
      {
        title: 'RxAnte, Durham NC',
        subtitle: 'Lead Drupal developer',
        period: 'Sep 2014 - Mar 2015',
        projects: [
          {
            description: 'At 2014, I joined a second stage healthcare startup company working as a <em>Drupal </em>developer. Provided enterprise <em>PHP/Drupal</em> development, support and deployment for a hospital/insurance/doctor relationship web application which helps their patients to adhere with their existing medications therefore upgrade ranking star in the healthcare system. The project creates dashboard to present data collected from doctor office and insurance company, and try to predict the patient behaviors. Analyzed data for each account (multi-tenant) are sampled from 10-20 contracts with average 0.5 to 5 millions patients.',
            tasks: [
              'Environment: <em>Drupal</em> 7 deployed in <em>CentOS</em> with vagrant support',
              'HIPPA Server: <em>HIPPA</em> for health care privacy with two factor VPN protections',
              'Continuous Integration: Continuousintegrated dev serverwith auto <em>Git</em> pull',
              'Service API: Use <em>Slim</em> framework to build rest service API that hosts all data',
              'Theming: <em>Drupal</em> theme and renderable array are extensively used ',
              ' <em>IE</em> 8 Compatibility: Responsive background, round corner, table-cell and <strong><em>CSS</em></strong> compression ',
            ]
          }
        ]
      },
      {
        title: 'DesignHammer, Durham NC',
        subtitle: 'Lead Drupal Developer',
        period: 'Nov 2013 - Apr 2014',
        projects: [
          {
            description: 'Provided <em>Drupal</em> 7 architect and development for a hospital startup environmental excellence awards application for more accurately measure and track sustainability performance of hospitals by allowing members to assess and track sustainability accomplishments. 320 awards (by 2013) are given to health care facilities and business members that show achievement in varying levels of excellence in sustainability overt he course of the calendar year. The project evolves into discovery, phase I, phase II and deployment stages, and took 9 month and 2000 billable hours by a team with two developers (me as the lead) and one project manager. The site has been launched with stats of 800,000 responses, 200 hospitals and 25,000 peek daily page views. ',
            tasks: [
              'Drupal Migration: Custom module to handle large complicated dataset migration from legacy <em>Excel</em> sheets ',
              'Organic Group: When application is created, 8000 questionnaires auto-populated inside ',
              'Form API: Questions are presented using Form API with input type dynamically populated from database ',
              'Dashboard Design: Display all application percentage completion status for each client ',
              'Review Workflow: Reviewer dashboard to assign, track and manage review process ',
              '<em>Cron</em> &amp; Batch: Batch job is heavily used for time-consuming functionalities, ex. Creation and reporting ',
              'Mathematic Formula: Excel cell calculation is implemented between questions upon front-end ',
              'Score Management: Points are assigned for each question, and totaled for each application ',
              'Report &amp; Export: Mass data assignment with import and export capability ',
              'Browser Compatibility: <em>IE</em> 7,8,9 38% user using IE 7 and 96% using Windows ',
            ]
          }
        ]
      },
      {
        title: 'AlphaMed Press, Durham NC',
        subtitle: 'Lead Drupal Architect',
        period: 'Sep 2013 - Feb 2014',
        projects: [
          {
            description: 'Redesign in <em>Drupal</em> 7 architect and migration from legacy Joomla site of two flagship sites Stemcell and Oncologist integrated with iPhone/iPad app using “One Web” solution and pulling articles daily through Stanford Hirewire. The site requires 8 user roles, 22 content types, 26 custom modules and 160 admin views. They host 3000 articles, 48,000 registered users and 120,000 unique visits per month. ',
            tasks: [
              'Data Modeling: article, interactive Ads, image, video and poll etc. ',
              'Data Migration: custom migration from Stanford <em>HighWire</em> ',
              'User Interface: desktop / mobile theming and interaction ',
              'Content Management: import/export and manage content categories ',
            ]
          }
        ]
      },
      {
        title: 'Duke University, Durham NC',
        subtitle: 'Lead Drupal Developer',
        period: 'Jan - Dec 2013',
        projects: [
          {
            description: 'Meantime, I also developed couple of front facing websites for Duke medical center and Duke university using <em>Drupal.</em> Redesign in <em>Drupal</em> 7 architect of department landing page and new students advising network application. The project splits into discovery, development, theming and support stages, and requires 300 panel layouts, 12 content types, 10 custom modules and 60 custom views and took 8 months and 1000 billable hours to finish for single developer. After the launch the site it has been used by 1,400 undergrads, 640 faculties in 50 majors.',
            tasks: [
              'Data Modeling: page, panel and widgets ',
              'Layout Design: create various combinations of page layouts ',
              'User Interface: apply layout pattern to multi departments ',
              'Directory Search: integrated with internal directory search ',
            ]
          }
        ]
      },
      {
        title: 'PlusDelta Technologies, Durham NC',
        subtitle: 'Lead PHP/Drupal Architect',
        period: 'Jun 2012 - Dec 2013',
        projects: [
          {
            description: 'At 2012, I joined a startup healthcare company, worked as a <em>Drupal</em> developer building a startup flagship product that tracks medication inside hospitals like FedEx. I help build a medication tracking and workflow process improvement solution for hospital pharmacies that uses handheld smart mobile technology with an integrated web-enabled software that verifies, records and monitors every step in the process of medication preparation, dispensing, and delivery. The project mainly builds an API that can talk to mobile devices and takes 1year with 2000 billable hours to finish. It has been deployed and used by 4 hospitals.',
            tasks: [
              'Data Modeling: dispense, med, order, and locations',
              'Tracking Workflow: design workflow states for medications',
              'Mobile Integration: design <em>API</em> to connect with devices&nbsp; ',
              'Tracking Wallboard: large screen monitor for hospital activity ',
            ]
          }
        ]
      },
    ]
  }

  experienceBefore() {
    return [
      {
        title: 'Hobby projects',
        subtitle: 'HTML + CSS',
        period: 'Sep 1999 - Dec 2000',
        description: 'I started to make websites back in college. I remember the first publlished one was a college graduation book one for classmates back in 1999. It took me three weeks to finish it, and the results is rewarding. We saved the website in CDs and gave everyone a copy. I believe I still have that CD with me.'
      },
          {
        title: 'NASA fluid dynamic project',
        subtitle: 'C++ Lead programmer',
        period: 'Jun 2003 - Jun 2006',
        description: 'From 2000, I joined Johns HopkinsUniversity and spent five years writing scientific software using <em>C++ </em>for NASA funded fluid dynamic projects, 12000 lines in <em>C++</em> in linux environment, integrated with parallel open source PETSC solver. A windows GUI front-end was written for data post-processing and visualization purpose using <em>Borland Delphi</em>. '
      },
      {
        title: 'NIH cancer research',
        subtitle: 'C++ Lead programmer',
        period: 'Oct 2007 - Dec 2009',
        description: 'After 2006, I started to write computationaland visualization software using <em>C++ </em>for NIH funded cancer research at UC Irvine. A data post-processing andvisualization package was written in <em>Matlab</em> to facilitate the job. The packagedeveloped has been used and tested with many collaborators throughout USA.'
      },
    ]
  }

  skillsetArchitect() {
    return [
      {
        title: 'Layout Sketch',
        subtitle: 'Design + HTML + CSS',
        period: 'Advanced',
        description: 'Based on the business requirement, I design the page layout. My way is to quickly deliver results that meets the eye, and hit the point, especially in the first roud of proposal. Tools that I used including <em>Sketch</em>, <em>HTML</em>, <em>Photoshop</em> and <em>Bootstrap</em>. What\'s really important here is to miminize un-neccesary cost while maintaining the prosperity of the potential business workflow.'
      },
      {
        title: 'Frontend Build',
        subtitle: 'Grunt + Gulp + Deployment',
        period: 'Advanced',
        description: 'One key aspect of the web application depends on the efficiency of the front-end build where various of tools and pipelines are blended together to achieve project compilation and deployment. Therefore be able to customerize the build, especially within your corporate infrastracture, is becoming vital to the success of the web application. Tools that I have used including <em>Grunt</em> and <em>Gulp</em>.'
      },
      {
        title: 'AngularJS',
        subtitle: 'Javascript + API + Form + Grid',
        period: 'Expert',
        description: 'For serious Javascript development, I chose <em>AngularJS</em> with modular <em>CSS</em> and <em>Javascript</em> compartment design. Within each module, MVC pattern is strictly followed, especially with fat model. Serial and parallel tasks (both in front and back) are chained together and fired rapidly via promises talking to various API hosting either in the same domain or proxyed to external servers. For more complicated widget, directive is used between multiple projects to increase usibility.'
      },
    ]
  }

  skillsetComponent() {
    return [
      {
        title: 'Auth & Roles',
        subtitle: 'Login, logout, remember, reset, roles and etc.',
        period: 'Advanced',
        description: 'Auth integration with third party authentication/authorization server, such as LDAP, custom API etc.'
      },
      {
        title: 'Hierachy Book Chapters',
        subtitle: 'Book, forms, blogs, and etc.',
        period: 'Expert',
        description: 'Information that needs to be present in hierarchyorder and navigated with a back-and-forth fashion.'
      },
      {
        title: 'Form + Grid Design',
        subtitle: 'Forms with tabs and sections, and records with groups',
        period: 'Expert',
        description: 'Large set of elements (&gt;500) needs to be displayed in form format to collect user information. large set of records (&gt;10,000) needs to be displayedin table and requires sorting, filtering and grouping capability.'
      },
      {
        title: 'Video + Audio Media',
        subtitle: 'Youtube, custom video, onsite narration etc.',
        period: 'Medium',
        description: 'Capability of embedding video and audio and controlling their playback after page load. '
      },
      {
        title: 'Editorial Workflow',
        subtitle: 'Approve, reject, review, audit and etc.',
        period: 'Advanced',
        description: 'The workflow process that resources go through additional approval &amp; rejection before going alive. '
      },
    ]
  }
}
