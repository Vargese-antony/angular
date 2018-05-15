import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { catchError, map } from 'rxjs/operators';
import { IUser } from '../../models/user.model';

@Injectable()
export class ProfileService {
  private baseUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get(this.baseUrl + '/users').pipe(
      catchError( (err: Response) => Observable.throw(err.statusText))
    );
  }

  getUserById(id: string): Observable<IUser> {
    return this.http.get(`${this.baseUrl}/users/${id}`).pipe(
      catchError( (err: Response) => Observable.throw(err.statusText))
    );
  }
}
