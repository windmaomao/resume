/**
 * Profile pouch class
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 12/07/16
 */
/// <reference path="../../../node_modules/@types/lodash/index.d.ts" />
/// <reference path="./profile.d.ts" />

import * as PouchDB from 'pouchdb';
import * as Relational from 'relational-pouch';
import * as _ from 'lodash';

PouchDB.plugin(Relational);

export class ProfilePouch implements ProfileInterface {
  // profile id
  private _id: string;
  // database schema
  private _schema: any;
  // local database
  private _local: any;
  // remote database
  private _remote: any;
  // internal profile data
  private _data: {};
  // sections
  private _sections: SectionInterface[];

  constructor() {
    this._id = 'windmaomao';
    // this.setupDB();
    this._data = {
      profiles: [{}]
    };
  }

  get id() { return this._id; }
  get data() { return this._data['profiles'][0]; }
  get sections() { return this._sections; };

  private setupDB() {
    this._remote = new PouchDB('https://windmaomao.cloudant.com/cvs');
    this._local = new PouchDB('cvs');
    let db = this._local;

    // setup schema
    this._schema = [
      {
        singular: 'profile',
        plural: 'profiles',
        relations: {
          // experiences: { hasMany: 'experience' }
          experiences: {
            hasMany: { type: 'experience', options: {queryInverse: 'profile'}}
          }
        }
      },
      {
        singular: 'experience',
        plural: 'experiences',
        relations: {
          profile: { belongsTo: 'profile' }
        }
      }
    ];
    db.setSchema(this._schema);

    // setup sync
    // db.sync(this._remote, {
    //   live: true,
    //   retry: true,
    // }).on('change', (change) => {
    //   console.log('Change occurred. Synchronizing with remote. ' + change.direction.toUpperCase());
    //   if (change.direction === 'pull' && change.change.docs.length > 0) {
    //     this.load();
    //   }
    // }).on('paused', (info) => {
    // }).on('active', (info) => {
    // }).on('error', (err) => {
    //   console.error(err);
    // });
  }

  // load from database
  private load(type = 'profile') {
    let db = this._local;
    let store = this;
    return db.rel.find(type).then((res) => {
      console.log('Profile', res);
      _.assign(store._data, res);
      return store._data;
    }, (err) => {
      console.error(err);
      return err;
    });
  }
}
