/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../../node_modules/@types/lodash/index.d.ts" />
/// <reference path="./profile.d.ts" />

import { expect } from 'chai';
import { Profile } from './profile.class';

describe('Profile', () => {
  let name = 'Owner';
  let profile: ProfileInterface;
  beforeEach(() => {
    profile = new Profile(name);
  });
  it('should have a person\'s name', () => {
    expect(profile.name).to.be.a('string');
    expect(profile.name).to.equal(name);
  });
  it('should have default profile sections', () => {
    expect(profile.sections).to.be.an('object');
    expect(profile.sections).have.ownProperty('profile');
    expect(profile.data).have.ownProperty('profile');
  });
  it('should init profile', () => {
    profile.data.profile.push('data');
    profile.init();
    expect(profile.data.profile).to.be.empty;
  });
  it('should init profile section', () => {
    profile.data.profile.push('data');
    profile.init();
    expect(profile.data.profile).to.be.empty;
  });
  it('should set profile data', () => {
    let item = { title: 'test' };
    profile.addSectionItem('profile', item);
    expect(profile.data.profile[0]).to.equal(item);
  });
  it('should more sections', () => {
    profile.addSection('custom');
    expect(profile.sections).have.ownProperty('custom');
    expect(profile.data).have.ownProperty('custom');
  });
});
