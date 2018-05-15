import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { catchError } from 'rxjs/operators';

@Injectable()
export class FeedsService {
  private baseUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  saveFeeds() {
    this.http.post(this.baseUrl + '/feeds')
  }

  getFeedsByUserId(id): Observable<any>{
    return this.http.get(`${this.baseUrl}/feeds/${id}`)
      .pipe(
        catchError( err => Observable.throw(err))
      );
  }
}
