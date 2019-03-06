import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Tour } from '../tour';
import { ToursService } from '../tours.service';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour.detail.component.html',
  styleUrls: ['./tour.detail.component.scss']
})
export class TourDetailComponent implements OnInit {

  @Input() tour: Tour;

  constructor(
    private toursService: ToursService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getTourDetail();
  }

  getTourDetail(): void {
    const tourId = this.route.snapshot.paramMap.get('id');
    this.toursService.getTourDetail(tourId)
      .subscribe(tour => this.tour = tour);
  }

  updateTourDetail(): void {
    this.toursService.updateTourDetail(this.tour)
      .subscribe(() => this.goBack());
  }

  deleteTour(): void {
    this.toursService.deleteTour(this.tour)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}