import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from "./user";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({ providedIn: 'root' })

export class UserService {


  constructor( private http: HttpClient ) { }

  getUser(): Observable<User> {
    return;
    // return this.http.get<User>(`http://localhost:8080/auth/me`)
    //   .pipe(
    //     tap(_ => this.log('fetched tours')),
    //     catchError(this.handleError('tours', []))
    //   );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ToursService message with the MessageService */
  private log(message: string) {

    // this.messageService.add(`ToursService: ${message}`);
  }
}