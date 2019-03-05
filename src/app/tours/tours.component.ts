import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToursService } from './tours.service';
import { Tour } from './tour';

@Component({
  selector: 'app-home',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {
  tours: Tour[];

  constructor( private toursService: ToursService ) { }

  ngOnInit() {
    this.getTours();
  }

  getTours(): void {
    this.toursService.getTours()
      .subscribe(tours => this.tours = tours);
  }

}