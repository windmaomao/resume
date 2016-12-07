/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../../node_modules/@types/lodash/index.d.ts" />
/// <reference path="./profile.d.ts" />

import { expect } from 'chai';
import { Profile } from './profile.class';

describe('Profile', () => {
  let name = 'Owner';
  let item = { title: 'test' };
  let section = [item];
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
    profile.data.profile.push(item);
    profile.init();
    expect(profile.data.profile).to.be.empty;
  });
  it('should init profile section', () => {
    profile.data.profile.push(item);
    profile.init();
    expect(profile.data.profile).to.be.empty;
  });
  it('should set profile data', () => {
    profile.addSection('profile');
    profile.addItem('profile', item);
    expect(profile.data.profile[0]).to.equal(item);
  });
  it('should add section', () => {
    profile.addSection('custom');
    expect(profile.sections).have.ownProperty('custom');
    expect(profile.data).have.ownProperty('custom');
  });
  it('should add section with data', () => {
    profile.addSection('custom', section);
    expect(profile.getItem('custom', '0')).to.equal(item);
  });
  it('should add section item', () => {
    profile.addSection('custom');
    profile.addItem('custom', item);
    expect(profile.getItem('custom', '0')).to.equal(item);
  });
  it('should clear section items', () => {
    profile.addSection('custom');
    profile.addItem('custom', item);
    let sec = profile.getSection('custom');
    profile.clearItems('custom');
    expect(profile.getSection('custom')).to.equal(sec);
    expect(profile.getSection('custom')).to.be.empty;
  });
  it('should set section items', () => {
    profile.addSection('custom');
    profile.addItem('custom', item);
    let sec = profile.getSection('custom');
    let data = [{ title: 'test2' }];
    profile.setSection('custom', data);
    expect(profile.getItem('custom', '0')).to.equal(data[0]);
    expect(profile.getSection('custom')).to.equal(sec);
  });
});
