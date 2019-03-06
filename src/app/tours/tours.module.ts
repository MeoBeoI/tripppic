import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToursRoutingModule } from './tours-routing.module';
import { ToursComponent } from './tours.component';
import { TourListComponent } from './list/tour.list.component';
import { TourCreateComponent } from './create/tour.create.component';
import { TourDetailComponent } from './detail/tour.detail.component';

@NgModule({
  declarations: [
    ToursComponent,
    TourListComponent,
    TourCreateComponent,
    TourDetailComponent,
  ],
  imports: [
    CommonModule,
    ToursRoutingModule,
    FormsModule,
  ],
  providers: [

  ]
})
export class ToursModule { }
