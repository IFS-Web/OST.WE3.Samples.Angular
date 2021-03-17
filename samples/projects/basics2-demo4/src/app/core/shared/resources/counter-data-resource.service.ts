import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable, throwError, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {environment} from '../../../../environments/environment';

import {CounterModel} from '../models/counter-model';


@Injectable({providedIn: 'root'})
export class CounterDataResourceService {
  static JSON_HEADERS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) {
  }

  public get(): Observable<CounterModel> {
    return of(CounterModel.fromDto({})); // TODO
  }

  public sendUp(): Observable<CounterModel> {
    return of(CounterModel.fromDto({})); // TODO
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(err.message);
  }

}
