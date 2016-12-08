/**
 * Profile static class
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 12/07/16
 */
/// <reference path="../../../node_modules/@types/lodash/index.d.ts" />
/// <reference path="./profile.d.ts" />

export class SectionStatic implements SectionInterface {
  private _data: any;
  private _profile: ProfileInterface;

  get id() { return this._data.id; }
  get data() { return this._data; }
  get name() { return this._data.name; }
  get items() { return this._data.items; }
  get profile() { return this._profile; }

  constructor(profile: ProfileInterface, data: any) {
    this._profile = profile;
    this._data = data;
  }
}

export class ProfileStatic implements ProfileInterface {
  private _data: any;
  private _sections: SectionStatic[];

  get data() { return this._data; }
  get id() { return this._data.id; }
  get sections() { return this._sections; }

  constructor() {
    this._data = {
      id: 'windmaomao',
      url: 'https://www.linkedin.com/in/windmaomao',
      name: 'Fang Jin',
      title: 'Front-end Architect',
      email: 'windmaomao @ gmail',
      phone: '(949) 302-7928',
      location: 'Raleigh, North Carolina',
      description: 'I specialize in developing websites in healthcare, banking, real estate and university sectors.',
      keywords: ['AngularJS', 'Sass', 'Bootstrap', 'Gulp', 'Git']
    };
    this._sections = [];
    this.addSection('professional', {
      subtitle: '',
      icon: '',
      items: this.professional()
    });
  }

  addSection(name: string, data: any) {
    data.name = name;
    data.title = name;
    data.subtitle = data.subtitle || '';
    data.icon = data.icon || '';
    data.items = data.items || [];
    this._sections.push(new SectionStatic(this, data));
  }

  private professional() {
    return [
      {
        description: 'I specialize in developing websites in healthcare, banking, real estate and university sectors.',
        keywords: ['AngularJS', 'Sass', 'Bootstrap', 'Gulp', 'Git'],
        footer: 'You can find more information here.'
      }
    ];
  }
}
