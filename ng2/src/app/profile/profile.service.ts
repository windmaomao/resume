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
  private _id: string;
  private _local: any;
  private _remote: any;
  private _profile: {};

  constructor() {
    this._id = 'windmaomao';
    this._setupLocal();
    this._remote = new PouchDB('https://windmaomao.cloudant.com/cvs');
  }

  private _setupLocal() {
    this._local = new PouchDB('cvs');
    let db = this._local;

    // setup schema
    db.setSchema([
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
    ]);

    return db.createIndex({
      index: { fields: ['data.experience', '_id'] }
    }).then(function() {
      return db.rel.save('profile', {
        name: 'Fang',
        id: 'windmaomao',
      });
    }).then(function () {
      return db.rel.save('experience', {
        title: 'DB',
        profile: 'windmaomao'
      });
    }).then(function () {
      return db.rel.find('profile', 'windmaomao');
    }).then(function (res) {
      console.log(res);
    });
  }
}
