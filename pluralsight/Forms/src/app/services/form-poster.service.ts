import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class FormPosterService {

  constructor(private _http: Http) { }

  postEmployeeForm(employee: Employee) : Observable<any> {
    //console.log('Employee object in service: ', employee );
    let body = JSON.stringify(employee);
    let headers = new Headers({'content-type' : 'application/json'});
    let options = new RequestOptions({headers:headers});
    return this._http.post('http://localhost:4300/employee',body,options)
      .map(this.processResponse)
      .catch(this.handleError);
  }

  private processResponse(res : Response) {
    let body = res.json();
    return body.fields || {}; 
  };

  private handleError(error : any) {
    console.error('Post error', error);
    return Observable.throw(error.statusText);
  };
}
