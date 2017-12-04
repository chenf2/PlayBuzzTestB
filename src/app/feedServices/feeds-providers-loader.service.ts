import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedsProvidersLoaderService {
  
  result:any;

  constructor(private _http: Http) { }
  
    getFeed() {
      return this._http.get("/api/getFeed")
        .map(result => this.result = result.json());
    }

}
