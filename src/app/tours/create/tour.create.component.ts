import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Tour } from '../tour';
import { ToursService } from '../tours.service';

@Component({
  selector: 'app-tour-create',
  templateUrl: './tour.create.component.html',
  styleUrls: ['./tour.create.component.scss']
})
export class TourCreateComponent implements OnInit {

  @Input() tour: Tour;

  constructor(
    private toursService: ToursService,
    private location: Location,
  ) { }

  ngOnInit() {
  }

  createTour(): void {
    console.log("TOUR ", this.tour);

    this.toursService.createTour(this.tour)
      // .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
