import { Component }            from '@angular/core'
import { ResumeService }        from './app.service';
import * as _                   from "lodash";

@Component({
  selector: 'my-app',
  template: `
  <my-header></my-header>
  <div class="container" style="margin-top: 50px; min-height: 500px;">
    <div class="row justify-content-md-center">
      <div class="col-md-12 col-lg-10 col-md-auto">
        <resume></resume>
      </div>
    </div>
  </div>
  <my-footer></my-footer>
`
})
export class AppComponent {
  constructor() {}
}

@Component({
  selector: 'my-header',
  template: `
<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">Front-End Architect</a>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
    </ul>
    <span class="navbar-text">
      Fang Jin
    </span>
  </div>
</nav>
`
})
export class HeaderComponent {
  constructor() {}
}

@Component({
  selector: 'my-footer',
  template: `
<div id="footer">
  <div class="row">
    <div class="col-md-12 no-padding">
      <div class="cv-contact">
        <h4 class="copyright">@ 2000 - 2017 Fang Jin. <span>All rights reserved.</span></h4>
      </div>
    </div>
  </div>
</div>
`
})
export class FooterComponent {
  constructor() {}
}

@Component({
  selector: 'resume',
  template: `
<div *ngIf="resume" class="container">
  <ul class="nav justify-content-end" id="version">
    <li class="nav-item" *ngFor="let section of sectionList">
      <a class="nav-link" href="#ss{{ section }}">{{ resume[section].title }}</a>
    </li>
  </ul>
  <div *ngFor="let section of sectionList">
    <cv-section [section]="resume[section]" id="ss{{ section }}"></cv-section>
    <hr />
  </div>
  <div>
    <a href="#top" class="back-to-top" title="Back to top">
      <i class="fa fa-arrow-circle-o-up"></i>
    </a>
  </div>
</div>
`
})
export class ResumeComponent {
  name: string;
  sectionDefs: any;
  resume: any;
  sectionList = [
    'profile',
    'company',
    // 'project',
    'recommend', 'education', 'award'
  ];
  constructor(private service: ResumeService) {
    this.name = 'Angular2';

    let that = this;
    service.all({ type: 'section'})
      .subscribe(
        (res) => {
          that.sectionDefs = res;

          service.all({ type: 'experience' })
            .subscribe(
              (res) => {
                // var groups = _.groupBy(res, 'section');
                var groups =
                  // group by section
                  _.groupBy(
                    // sort all item by createdAt
                    _.orderBy(
                      res, ['createdAt'], ['desc']
                    ), 'section'
                  )
                ;
                var resume = {};
                _.each(groups, function(group, key) {
                  resume[key] = {
                    title: key,
                    items: group
                  };
                  let def = _.find(that.sectionDefs, { name: key });
                  if (def) {
                    _.merge(resume[key], def);
                  }
                });
                that.resume = resume;
                // console.log(resume);
              }
            )
          ;
        }
      )
    ;
  }
}

@Component({
  selector: 'cv-section',
  inputs: ['section'],
  template: `
<div class="row cv-section">
    <div class="col-md-3">
        <div class="cv-section-title">
            <h2>
              <i class="fa fa-{{ section.icon }}"></i>
              <span [innerHtml]='section.title'></span>
            </h2>
            <h4 [innerHtml]='section.subtitle'></h4>
          </div>
    </div>
    <div class="col-md-9">
        <div class="cv-item" *ngFor="let item of section.items" [hidden]="item.excluded">
            <p *ngIf="item.createdAt" class="period">{{ item.createdAt | date: 'MMM y' }} - {{ item.updatedAt | date: 'MMM y' }}</p>
            <h3 *ngIf="item.title" [innerText]="item.title"></h3>
            <h4 *ngIf="item.subtitle" [innerText]="item.subtitle"></h4>
            <md [value]="item.description" [options]="{ parseImgDimension: true }"></md>

            <ul *ngIf="item.highlights" class="fill-circle highlights">
              <li *ngFor="let feature of item.highlights.split('\n')">
                <span [innerHtml]="feature"></span>
              </li>
            </ul>
            <blockquote *ngIf="section.type == 'quote'">
                <p>
                  <i class="fa fa-quote-left"></i>
                  <span [innerHtml]="item.description"></span>
                </p>
                <footer [innerHtml]="item.note"></footer>
            </blockquote>
            <p *ngIf="item.keywords">
                <small>
                    <strong>Keywords:</strong>
                    <span *ngFor="let keyword of item.keywords.split(',')"
                      class="label label-default label-keyword"
                      [innerText]="keyword"
                    ></span>
                </small>
            </p>
            <div *ngIf="item.footer">
              <hr />
              <small [innerHtml]="item.footer"></small>
            </div>
        </div>
    </div>
</div>

`
})
export class SectionComponent {
  // constructor(public sd: ShowdownService) {}
}
