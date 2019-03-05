import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { ToursService } from '../tours.service';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour.list.component.html',
  styleUrls: ['./tour.list.component.scss']
})
export class TourListComponent implements OnInit {

  tours: Tour[];

  constructor(private toursService: ToursService) { }

  ngOnInit() {
    this.getTours();
  }

  getTourDetail(tour: Tour) {
    console.log(tour);
  }

  getTours(): void {
    this.toursService.getTours()
      .subscribe(tours => this.tours = tours);
  }

}
