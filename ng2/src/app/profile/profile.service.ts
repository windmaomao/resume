/**
 * Profile services
 * Profile model and store
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 11/22/16
 */
import {Injectable} from '@angular/core';
import * as PouchDB from 'pouchdb';
import * as Relational from 'relational-pouch';
import * as _ from "lodash";

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
    this._local.setSchema([
      {
        singular: 'profile',
        plural: 'profiles',
        relations: {
          experiences: { hasMany: 'experience' }
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
    var db = this._local.rel;
    db.save('profile', {
      id: 'windmaomao3',
      name: 'Fang',
      experiences: ['windmaomao3:experience']
    }).then(function() {
      db.save('experience', {
        id: 'windmaomao3:experience',
        title: 'abc',
        profile: 'windmaomao'
      });
    }).then(function() {
      db.find('profile').then(function(res) {
        console.log(res);
      })
    });
  }
}
