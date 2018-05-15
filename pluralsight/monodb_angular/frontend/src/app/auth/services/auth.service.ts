import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private baseUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  // getMessages(): Observable<any> {
  //   return this.http.get(this.baseUrl + '/posts').pipe(
  //     catchError((response: Response) => Observable.throw(response.statusText))
  //   );
  // }

  registerUser(user): Observable<any> {
    return this.http.post(this.baseUrl + '/auth/register', user).pipe(
      catchError((response: Response) => Observable.throw(response.statusText))
    );
  }

  loginUser(user): Observable<any> {
    return this.http.post(this.baseUrl + '/auth/login', user).pipe(
      catchError((response: Response) => Observable.throw(response.statusText))
    );
  }
}
