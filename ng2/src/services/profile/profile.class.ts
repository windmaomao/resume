/// <reference path="../../../node_modules/@types/lodash/index.d.ts" />
/// <reference path="./profile.d.ts" />

import * as _ from 'lodash';

export class Profile implements ProfileInterface {
  name: string;
  data: any;
  sections: any;
  defaultSections = ['profile', 'professional'];

  constructor(_name: string) {
    this.init(_name);
  }

  init(_name?: string) {
    if (_name) {
      this.name = _name;
    }
    // clear sections and data
    this.sections = {};
    this.data = {};
    // init sections and data
    _.each(this.defaultSections, (section) => {
      this.initSection(section);
    });
  }

  initSection(section: string) {
    this.sections[section] = {
      name: section, title: section
    };
    this.data[section] = [];
  }

  addSection(section: string) {
    if (!(section in this.sections)) {
      this.initSection(section);
    }
  }

  addSectionItem(section: string, item: any) {
    this.data[section].push(item);
  }
};
