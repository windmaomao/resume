/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../../node_modules/@types/lodash/index.d.ts" />
/// <reference path="./profile.d.ts" />

import { expect } from 'chai';
import { PouchDB } from './pouchdb';
import { ProfilePouch } from './profile.pouch';

describe('ProfilePouch', () => {
  let profile: ProfileInterface;
  let db: PouchDBInterface;

  beforeEach(() => {
    db = new PouchDB('123', 'cvs');
    profile = new ProfilePouch(db);
  });

  it('should have id', () => {
    expect(profile.id).not.to.be.empty;
  });

});
