import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursRoutingModule } from './tours-routing.module';
import { ToursComponent } from './tours.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { TourDetailComponent } from './detail/tour.detail.component';

@NgModule({
  declarations: [
    ToursComponent,
    ListComponent,
    CreateComponent,
    TourDetailComponent,
  ],
  imports: [
    CommonModule,
    ToursRoutingModule,
  ],
  providers: [

  ]
})
export class ToursModule { }
