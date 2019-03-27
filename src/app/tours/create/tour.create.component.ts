import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Tour } from '../tour';
import { ToursService } from '../tours.service';

@Component({
  selector: "app-tour-create",
  templateUrl: "./tour.create.component.html",
  styleUrls: ["./tour.create.component.scss"]
})
export class TourCreateComponent implements OnInit {
  @Input() tour: Tour = {
    title: '',
    phone: '0909090221',
    price: 30,
  };

  constructor(private toursService: ToursService, private location: Location) {}

  ngOnInit() {}

  createTour(): void {
    this.toursService.createTour(this.tour)
      .subscribe(tours => console.log('yoooo:' + tours));
  }

  goBack(): void {
    this.location.back();
  }
}
