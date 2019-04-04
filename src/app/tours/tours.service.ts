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

  private toursAPIUrl = 'api/tours';

  constructor(
    private http: HttpClient
  ) { }

  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.toursAPIUrl)
      .pipe(
        tap(_ => this.log('fetched tours')),
        catchError(this.handleError('tours', []))
      );
  }

  createTour(tour: Tour): Observable<Tour> {
    console.log('createTour');
    return this.http.post<Tour>(this.toursAPIUrl, tour, httpOptions).pipe(
      tap(newtour => this.log(`create tour: ` + newtour)),
      catchError(this.handleError<any>("createTour"))
    );
  }

  getTourDetail(tourId: string): Observable<Tour> {
    return this.http.get<Tour>(`${this.toursAPIUrl}/${tourId}`)
      .pipe(
        tap(_ => this.log('fetched tours')),
        catchError(this.handleError<Tour>(`getTour id=${tourId}`))
      );
  }

  updateTourDetail(tour: Tour): Observable<any> {
    return this.http.put(`${this.toursAPIUrl}/${tour._id}`, tour, httpOptions).pipe(
      tap(_ => this.log(`updated tour id=${tour._id}`)),
      catchError(this.handleError<any>('updateTour'))
    );
  }

  deleteTour(tour: Tour): Observable<any> {
    return this.http.delete(`${this.toursAPIUrl}/${tour._id}`,httpOptions).pipe(
      tap(_ => this.log(`delete tour id=${tour._id}`)),
      catchError(this.handleError<any>('deleteTour'))
    );
  }

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