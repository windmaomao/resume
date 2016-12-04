/**
 * App services
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/10/16
 */
import {Injectable} from '@angular/core';
import * as PouchDB from 'pouchdb';
import * as _ from "lodash";
import { ProfileStaticService } from './profile.static.service'

/**
 * Profile store service
 */
@Injectable()
export class ProfileStoreService {
  _id: string;
  private _profile: {};
  private _local: any;
  private _remote: any;
  onAfterLoad: any;

  constructor() {
    this._local = new PouchDB('profiles');
    this._remote = new PouchDB('https://windmaomao.cloudant.com/profiles');
    this._id = 'windmaomao';
    this._profile = { _id: this._id };
    this.sync();
  }
  get profile(): any {
    return this._profile;
  }
  set profile(profile: any) {
    _.merge(this._profile, profile);
  }
  // load from database
  load() {
    let that = this;
    return this._local.get(this._id).then((doc) => {
      // console.log('Doc', doc);
      that.profile = doc;
      this._afterLoad(that.profile);
      return that.profile;
    }, (err) => {
      console.error(err);
      that.save();
      return that.profile;
    });
  }
  _afterLoad(doc: any) {
    if (this.onAfterLoad) {
      this.onAfterLoad(doc);
    }
  }
  // save to database
  save() {
    var that = this;
    return this._local.put(this._profile).then((res) => {
      // store rev to keep it latest
      that._profile["_rev"] = res.rev;
    }).catch((err) => {
      console.error(err);
    })
  }
  // sync to remote database
  sync() {
    this._local.sync(this._remote, {
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
  }
}

/**
 * Profile service
 * Profile object for all resume info
 */
@Injectable()
export class ProfileService {
  sections:any;
  constructor(pstatic: ProfileStaticService) {
    _.merge(this, pstatic);
    // console.log(this);

    // load data from db
    // let that = this;
    // ps.onAfterLoad = function(doc) {
    //   let profile = _.cloneDeep(doc);
    //   delete(profile._id);
    //   delete(profile._rev);
    //   _.merge(that, profile);
    // }
    // ps.load().then((doc) => {});
  }
}
