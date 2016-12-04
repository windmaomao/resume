/**
 * App services
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/10/16
 */
import {Injectable} from '@angular/core';
import * as PouchDB from 'pouchdb';
import * as _ from "lodash";
import { ProfileStaticService } from './profile.static.service';
import { ProfileModelService } from './profile.model.service';

/**
 * Profile service
 * Profile object for all resume info
 */
@Injectable()
export class ProfileService {
  sections:any;
  constructor(pstatic: ProfileStaticService, pmodel: ProfileModelService) {
    let profile = this;
    _.merge(profile, pstatic);
    pmodel.load('profile').then(function(raw) {
      console.log(raw);
      if (_.isArray(raw.profiles) && raw.profiles.length > 0) {
        _.merge(profile, raw.profiles[0]);
      }
    });
  }
}
