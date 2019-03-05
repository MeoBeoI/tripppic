import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { ToursService } from '../tours.service';

@Component({
  selector: 'app-tour-create',
  templateUrl: './tour.create.component.html',
  styleUrls: ['./tour.create.component.scss']
})
export class TourCreateComponent implements OnInit {

  tours: Tour[];

  constructor(private toursService: ToursService) { }

  ngOnInit() {
  }

  createTour(tour): void {
    // TODO: get tour infor from form

    tour = {
      title: "title 55",
      phone: "09090909",
      categories: ["category 1", "category 2"],
      address: "Address 1",
      location: "locaiton 1",
      cities: ["city 1"],
      description: "Description 1",
      expect: "Expect 1",
      startTime: "2019-02-26T09:29:33.156Z",
      endTime: "2019-02-26T10:29:33.156Z",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/16/20/1e/25/hanoi-food-on-foot-walking.jpg",
      price: 20
    }

    this.toursService.createTour(tour)
      // .subscribe(tours => this.tours = tours);
  }


}
