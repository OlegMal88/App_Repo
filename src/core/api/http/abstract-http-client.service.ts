import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpConfig } from './http-config.model';

@Injectable({
  providedIn: 'root'
})
export class AbstractHttpClient {
  SERVER_URL = 'http://localhost:8080/api';
  configUrl: HttpConfig;

  constructor(private http: HttpClient) { }

  getData<T>(): Observable<T[]> {
      console.log(`${this.SERVER_URL + this.configUrl.url}`);
      return this.http.get<T[]>(`${this.SERVER_URL + this.configUrl.url}`)
                       .pipe(catchError(this.handleError));
  }

  // getDataById(dataId){
  //      return this.httpClient.get(`${this.SERVER_URL + this.configUrl}/${dataId}`);
  // }

  // createPolicy(data: {id: number, amount: number, clientId: number, userId: number, description: string}){
  //     return this.httpClient.post(`${this.SERVER_URL + this.configUrl}`, post)
  // }

  // deletePolicy(dataId){
  //     return this.httpClient.delete(`${this.SERVER_URL + this.configUrl}/${dataId}`)
  // }

  // updatePolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
  //     return this.httpClient.put(`${this.SERVER_URL + this.configUrl}/${policy.id}`, post)
  // }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
