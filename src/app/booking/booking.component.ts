import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { Booking } from './booking';

@Component({
  selector: 'app-home',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookings: Booking[];

  constructor( private bookingService: BookingService ) { }

  ngOnInit() {
    this.getBookings();
  }

  getBookings(): void {
    this.bookingService.getBookings()
      .subscribe(bookings => this.bookings = bookings);
  }

  acceptBooking(bookingId): void {
    this.bookingService.acceptBooking(bookingId);
  }

  declineBooking(bookingId): void {
    this.bookingService.declineBooking(bookingId);
  }

}