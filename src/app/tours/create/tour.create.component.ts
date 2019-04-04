import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';

import { Tour } from '../tour';
import { ToursService } from '../tours.service';

@Component({
  selector: "app-tour-create",
  templateUrl: "./tour.create.component.html",
  styleUrls: ["./tour.create.component.scss"]
})
export class TourCreateComponent implements OnInit {

  tour = new Tour(
    "TITLE",
    "description",
    ["categories"],
    "phone",
    "address",
    "location",
    ["cities"],
    "expect",
    "2019-10-15T00:05:32.000Z",
    "2019-10-15T00:07:32.000Z",
    "image",
    80,
    "123"
  )

  constructor(
    private toursService: ToursService,
    private location: Location,
  ) { }

  ngOnInit() {
    // TODO:
    delete this.tour._id;
  }

  createTour(): void {
    this.toursService.createTour(this.tour)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
