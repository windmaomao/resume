/**
 * Profile pouch class
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 12/07/16
 */
/// <reference path="../../../node_modules/@types/lodash/index.d.ts" />
/// <reference path="./profile.d.ts" />

// import * as PouchDB from 'pouchdb';
// import * as Relational from 'relational-pouch';
// import * as _ from 'lodash';
import { PouchDB } from './pouchdb';

// PouchDB.plugin(Relational);

export class ProfilePouch implements ProfileInterface {
  private _id: string;
  private _data: {};
  private _sections: SectionInterface[];
  private _db: PouchDB;

  get id() { return this._id; }
  get data() { return this._data['profiles'][0]; }
  get sections() { return this._sections; };
  get db() { return this._db; }

  constructor(pouch: PouchDB) {
    this._db = pouch;
    this._id = 'windmaomao';
    this._data = {
      profiles: [{}]
    };
  }

}
