import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Booking } from "./booking";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // TODO: get token from user
    // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6W10sIl9pZCI6IjVjNzNiOTVmODg5NzRmMWJjZjFmNjkyMCIsImZ1bGxuYW1lIjoidHJ1bmdubSIsImVtYWlsIjoidHJ1bmdubTA1MTJAZ21haWwuY29tIiwiY3JlYXRlZEF0IjoiMjAxOS0wMi0yNVQwOTo0NjowNy4yODJaIn0.S-Dahmykh0fWT65_rEZDzdqGqwsQ1lgad4FemHdSJTo'
  })
};

@Injectable({ providedIn: 'root' })

export class BookingService {

  private bookingUrl = 'api/booking';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  /** GET tours from the server */
  getBookings(): Observable<Booking[]> {
    // TODO: HARD CODE
    return this.http.get<Booking[]>("http://localhost:8080/api/booking/vendor/")
      .pipe(
        tap(_ => this.log('fetched tours')),
        catchError(this.handleError('tours', []))
      );
  }

  /** */
  acceptBooking(bookingId): void {
    // TODO: HARD CODE
    this.http.post(`http://localhost:8080/api/booking/${bookingId}/accept`, httpOptions)
      .subscribe(
        console.log
        // tap(_ => this.log('fetched tours')),
        // catchError(this.handleError('tours', []))
      );
  }

  declineBooking(bookingId): void {
    // TODO: HARD CODE
    this.http.post(`http://localhost:8080/api/booking/${bookingId}/decline`, httpOptions)
      .subscribe(
        console.log
        // tap(_ => this.log('fetched tours')),
        // catchError(this.handleError('tours', []))
      );
  }



  /** GET hero by id. Will 404 if id not found */
  // getHero(id: number): Observable<Tour> {
  //   const url = `${this.toursUrl}/${id}`;
  //   return this.http.get<Tour>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<Tour>(`getHero id=${id}`))
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

  /** POST: add a new hero to the server */
  // addTour(tour: Tour): Observable<Tour> {
  //   return this.http.post<Tour>(this.toursUrl, tour, httpOptions).pipe(
  //     tap((newTour: Tour) => this.log(`added tour w/ id=${newTour.id}`)),
  //     catchError(this.handleError<Tour>('addTour'))
  //   );
  // }

  // /** DELETE: delete the hero from the server */
  // deleteHero(tour: Tour | number): Observable<Tour> {
  //   const id = typeof tour === 'number' ? tour : tour.id;
  //   const url = `${this.toursUrl}/${id}`;

  //   return this.http.delete<Tour>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted hero id=${id}`)),
  //     catchError(this.handleError<Tour>('deleteHero'))
  //   );
  // }

  // /** PUT: update the hero on the server */
  // updateHero(hero: Hero): Observable<any> {
  //   return this.http.put(this.toursUrl, hero, httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${hero.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
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

  /** Log a BookingService message with the MessageService */
  private log(message: string) {

    // this.messageService.add(`BookingService: ${message}`);
  }
}