import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {environment} from '../../../../environments/environment';

import {CounterModel} from '../models/counter-model';

@Injectable()
export class CounterDataResourceService {
  static JSON_HEADERS = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) {
  }

  public get(): Observable<CounterModel> {
      return this.http.get(
        `${environment.serverUrl}api`,
        CounterDataResourceService.JSON_HEADERS)
        .pipe(
          map((data) => CounterModel.fromDto(data)),
          catchError((err) => this.handleError(err)));
  }

  public sendUp(): Observable<CounterModel>  {
    return this.http.post(
      `${environment.serverUrl}api/up`,
      void 0,
      CounterDataResourceService.JSON_HEADERS)
      .pipe(
        map((data) => CounterModel.fromDto(data)),
        catchError((err) => this.handleError(err)));
    // return null; // TODO
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(err.message);
  }

}
