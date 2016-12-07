/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../../../node_modules/@types/chai/index.d.ts" />
/// <reference path="./profile.d.ts" />

import { expect } from 'chai'; 

class Profile implements ProfileInterface {
  name: string;
  data: any;
  sections: any;
  constructor(_name: string) {
    this.name = _name;
    this.data = {};
    this.sections = {
      professional: {
          name: 'professional', title: 'Professional',
      }
    };
  }
};

describe('Profile', () => {
  let name = 'Owner';
  let profile: Profile;
  beforeEach(() => {
    profile = new Profile(name);
  });
  it('should have a person\'s name', () => {
    expect(profile.name).to.be.a('string');
    expect(profile.name).to.equal(name);
  });
  it('should have profile sections', () => {
  });
});
