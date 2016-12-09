/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="../../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../../node_modules/@types/lodash/index.d.ts" />
/// <reference path="./profile.d.ts" />

import { expect } from 'chai';
import { PouchDB } from './pouchdb';

describe('PouchDB', () => {
  let db: PouchDBInterface;
  let host = 'https://windmaomao.cloudant.com/';
  let database = 'cvs';

  beforeEach(() => {
    db = new PouchDB(host, database);
  });

  it('should init with host and database', () => {
    expect(db.host).to.equal(host);
    expect(db.database).to.equal(database);
  });

  it('should setup database connection', () => {
    db.connect();
  });

  it('should fetch', (done) => {
    let id = '1';
    db.load(id).then((raw) => {
      expect(raw.id).to.equal(id);
      done();
    });
  });

});
