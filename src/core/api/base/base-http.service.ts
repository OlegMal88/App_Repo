import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpConfig } from '@api/mockServer/http-config.model';
import { basicURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
class BaseHttpService {
  SERVER_URL = basicURL.local;
  configUrl: HttpConfig = { url: '/counter' };

  constructor(private http: HttpClient) {}

  getData<T>(): Observable<T[]> {
    return this.http.get<T[]>(`${this.SERVER_URL + this.configUrl.url}`).pipe(catchError(err => this.handleError(err)));
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

export { BaseHttpService };
