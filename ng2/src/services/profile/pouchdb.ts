/**
 * PouchDB class
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 12/09/16
 */
/// <reference path="../../../node_modules/@types/lodash/index.d.ts" />
/// <reference path="./profile.d.ts" />

export class PouchDB implements PouchDBInterface {
  host: string;
  database: string;

  constructor(host: string, db: string) {
    this.host = host;
    this.database = db;
  }
  connect() {}
  load(id: string) {}
}
