import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Tour } from "./tour";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({ providedIn: 'root' })

export class ToursService {

  private toursUrl = 'api/tours';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  /** GET tours from the server */
  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>("http://localhost:8080/api/tours")
      .pipe(
        tap(_ => this.log('fetched tours')),
        catchError(this.handleError('tours', []))
      );
  }

  createTour(tour: Tour): void {
    this.http.post(this.toursUrl, tour, httpOptions).subscribe(
      console.log
      // TODO: DO SOMGTHING

    );
  }

  getTourDetail(tourId: string): Observable<Tour> {
    return this.http.get<Tour>(`http://localhost:8080/api/tours/${tourId}`)
      .pipe(
        tap(_ => this.log('fetched tours')),
        catchError(this.handleError<Tour>(`getTour id=${tourId}`))
      );
  }

  // updateHero(hero: Hero): Observable<any> {
  //   return this.http.put(this.toursUrl, hero, httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${hero.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }

  /* GET tours whose name contains search term */
  // searchTours(term: string): Observable<Tour[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Tour[]>(`${this.toursUrl}/?name=${term}`).pipe(
  //     tap(_ => this.log(`found tours matching "${term}"`)),
  //     catchError(this.handleError<Tour[]>('tours', []))
  //   );
  // }

  //////// Save methods //////////



  // /** DELETE: delete the hero from the server */
  // deleteHero(tour: Tour | number): Observable<Tour> {
  //   const id = typeof tour === 'number' ? tour : tour.id;
  //   const url = `${this.toursUrl}/${id}`;

  //   return this.http.delete<Tour>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted hero id=${id}`)),
  //     catchError(this.handleError<Tour>('deleteHero'))
  //   );
  // }

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