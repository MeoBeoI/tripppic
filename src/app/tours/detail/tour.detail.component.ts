import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { ToursService } from '../tours.service';

@Component({
  selector: 'app-detail',
  templateUrl: './tour.detail.component.html',
  styleUrls: ['./tour.detail.component.scss']
})
export class TourDetailComponent implements OnInit {

  tour: Tour;

  constructor(private toursService: ToursService) { }

  ngOnInit() {
    // TODO: check this
    this.getTourDetail(`asdasdasd`);
  }

  getTourDetail(tourId): void {
    this.toursService.getTourDetail(tourId)
      // .subscribe(tour => this.tour = tour);
  }

}