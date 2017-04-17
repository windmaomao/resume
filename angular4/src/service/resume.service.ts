/**
 * Resume service
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 1/8/17
 */
import { Injectable }     from '@angular/core';
import { Restangular }    from 'ng2-restangular';
import * as _             from "lodash";
import 'rxjs/add/operator/map';

@Injectable()
export class ResumeService {
  private _rest: Restangular;
  private _query: any;
  private _dbName: string;

  _db(v?: string) { return this._rest.one(this._dbName, v || ''); }
  _design(d: string) { return this._db().one('_design', d); }
  _view(d:string, v:string) { return this._design(d).one('_view', v); }

  constructor(private rest: Restangular) {
    this._dbName = 'resume';
    this._rest = rest;

    this._query = {
      session: () => this._rest.one('_session'),
      all: () => this._db('_all_docs'),
      db: () => this._db(),
      one: (id) => this._db(id),
      type: (type) => {
        return {
          all: () => this._view(type, 'all'),
          tree: () => this._view(type, 'tree')
        }
      },
      experience: {
        all: () => this._view('experience', 'all'),
        tree: () => this._view('experience', 'tree')
      }
    };
  }

  login(user) {
    return this._query.session()
      .post('', user)
      .map(res => console.log(res))
    ;
    // var ob = this.http
    //   .post(url, user)
    //   .map(response => response.json());
    // return ob;
  }


  all(options?: any) {
    var ob;
    if (!options) {
      ob = this._query.all()
        .get()
        .map(res => res.rows)
      ;
    } else {
      if ('type' in options) {
        var type = options.type;
        ob = this._query.type(options.type).all()
          .get()
          .map(res => {
            return _.map(res.rows, (item) => {
              return item['value'];
            });
          })
        ;
      }
    }
    return ob;
    // ob.subscribe(res => { console.log(res); });
    // return ob;
  }

  one(id: string) {
    return this._query.one(id).get();
    // ob.subscribe(res => { console.log(res); });
  }

  add(item: any) {
    return this._query.db()
      // .post('', item).map(res => {
      .customPOST(item).map(res => {
        item._id = res.id;
        item._rev = res.rev;
        return res;
      })
    ;
  }

  save(id: string, item: any) {
    return this._query.one(id)
      .customPUT(item).map(res => {
        item._rev = res.rev;
        return res;
      })
    ;
  }

  delete(item) {
    return this._query.one(item._id)
      .remove({ rev: item._rev })
    ;
  }

}