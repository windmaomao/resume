/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../../node_modules/@types/lodash/index.d.ts" />
/// <reference path="./profile.d.ts" />

import { expect } from 'chai';
import { ProfileStatic, SectionStatic } from './profile.static';

describe('ProfileStatic', () => {
  let profile: ProfileInterface;

  beforeEach(() => {
    profile = new ProfileStatic();
  });

  it('should have id', () => {
    expect(profile.id).not.to.be.empty;
  });

  it('should have data', () => {
    expect(profile.data).to.be.an('object');
  });

  it('should have sections', () => {
    expect(profile.sections).to.be.an('array');
    expect(profile.sections.length).to.be.a('number');
  });
});

describe('SectionStatic', () => {
  let profile: ProfileInterface;
  let section: SectionInterface;

  beforeEach(() => {
    profile = new ProfileStatic();
    section = new SectionStatic(profile, {
      title: 'abc',
      items: []
    });
  });

  it('should be children', () => {
    expect(section.profile).to.equal(profile);
  });

  it('should have data', () => {
    expect(section.data).to.be.an('object');
  });

  it('should have items', () => {
    expect(section.items).to.be.an('array');
  });
});
