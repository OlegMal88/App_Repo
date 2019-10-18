import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpConfig } from '@api/mockServer/http-config.model';

@Injectable({
  providedIn: 'root',
})
class BaseHttp {
  SERVER_URL = 'http://localhost:8080/api';
  configUrl: HttpConfig;

  constructor(private http: HttpClient) {}

  getData<T>(): Observable<T[]> {
    return this.http.get<T[]>(`${this.SERVER_URL + this.configUrl.url}`).pipe(catchError(this.handleError));
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}

export { BaseHttp };