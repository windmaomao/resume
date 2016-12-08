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
import * as _ from "lodash";

PouchDB.plugin(Relational);

export class ProfilePouch implements ProfileInterface2 {
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

  name: string;
  title: string;
  sections: any[];

  get id() {
    return this._id;
  }

}
