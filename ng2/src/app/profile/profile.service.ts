/**
 * Profile services
 * Profile model and store
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 11/22/16
 */
import {Injectable} from '@angular/core';
import * as PouchDB from 'pouchdb';
import * as PouchDBFind from 'pouchdb-find';
import * as Relational from 'relational-pouch';
import * as _ from "lodash";

PouchDB.plugin(PouchDBFind);
PouchDB.plugin(Relational);

/**
 * Profile store service
 */
@Injectable()
export class ProfileModelService {
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

  constructor() {
    this._id = 'windmaomao';
    this._remote = new PouchDB('https://windmaomao.cloudant.com/cvs');
    this._setup();
    this._data = {
      profiles: [{}],
      experiences: []
    };
  }

  private _setup() {
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
    db.sync(this._remote, {
      live: true,
      retry: true,
    }).on('change', (change) => {
      console.log("Change occurred. Synchronizing with remote. " + change.direction.toUpperCase());
      if (change.direction == "pull" && change.change.docs.length > 0) {
        this.load();
      }
    }).on('paused', (info) => {
    }).on('active', (info) => {
    }).on('error', (err) => {
      console.error(err);
    })

    // return db.createIndex({
    //   index: { fields: ['data.experience', '_id'] }
    // }).then(function() {
    //   return db.rel.save('profile', {
    //     name: 'Fang',
    //     id: 'windmaomao',
    //   });
    // }).then(function () {
    //   return db.rel.save('experience', {
    //     title: 'DB',
    //     profile: 'windmaomao'
    //   });
    // }).then(function () {
    //   return db.rel.find('profile', 'windmaomao');
    // }).then(function (res) {
    //   console.log(res);
    // });
  }

  get id(): string {
    return this._id;
  }

  get data(): any {
    return this._data;
  }

  // find type plural
  _plural(type): string {
    let item = _.find(this._schema, { singular: type });
    if (item) {
      return item['plural'];
    }
    return '';
  }

  // load from database
  load(type = "profile") {
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

  // add type doc
  save(type: string, doc: any) {
    let store = this;
    let id = doc.id;
    return this._local.rel.save(type, doc).then(() => {
      return store.load(type);
    });
  }

  // delete type doc
  del(type: string, doc: any) {
    let store = this;
    let id = doc.id;
    return this._local.rel.del(type, doc).then(() => {
      return store.load(type);
    });
  }

}
