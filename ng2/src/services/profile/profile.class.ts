/// <reference path="../../../node_modules/@types/lodash/index.d.ts" />
/// <reference path="./profile.d.ts" />

import * as _ from 'lodash';

export class Profile implements ProfileInterface {
  private _data: any;
  private _sections: any;
  name: string;
  defaultSections = ['profile', 'professional'];

  constructor(_name: string) {
    this.init(_name);
  }

  get data(): any {
    return this._data;
  }

  get sections(): any {
    return this._sections;
  }

  init(_name?: string) {
    if (_name) {
      this.name = _name;
    }
    // clear sections and data
    this._sections = {};
    this._data = {};
    // init sections and data
    _.each(this.defaultSections, (section) => {
      this.addSection(section);
    });
  }

  _initSectionDef(section: string) {
    this._sections[section] = {
      name: section, title: section
    };
  }

  addSection(section: string, items?: any[]) {
    this._initSectionDef(section);
    this._data[section] = items ? items : [];
  }

  setSection(section: string, items: any[]) {
    if (this.hasSection(section)) {
      this.clearItems(section);
      this.addItems(section, items);
      // _.each(items, (item) => {
      //   this._data[section].push(item);
      // });
    } else {
      this.addSection(section, items);
    }
  }

  getSection(section: string) {
    if (this.hasSection(section)) {
      return this._data[section];
    } else {
      // Todo: should throw
      return [];
    }
  }

  hasSection(section: string) {
    return (section in this.sections);
  }

  addItem(section: string, item: any) {
    this._data[section].push(item);
  }

  getItem(section: string, key: string) {
    return this._data[section][key];
  }

  addItems(section: string, items: any[]) {
    _.each(items, (item) => {
      this._data[section].push(item);
    });
  }

  clearItems(section: string) {
    let arr = this._data[section];
    arr.splice(0, arr.length);
  }

};
