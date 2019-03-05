import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { ToursService } from '../tours.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  tours: Tour[];

  constructor(private toursService: ToursService) { }

  ngOnInit() {
    this.getTours();
  }

  getTours(): void {
    this.toursService.getTours()
      .subscribe(tours => this.tours = tours);
  }

}
