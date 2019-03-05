import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToursComponent } from './tours.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { TourDetailComponent } from './detail/tour.detail.component';
// import { OnlytoursUsersGuard } from './tours-user-guard';

const routes: Routes = [{
  path: 'tours',
  // canActivate: [OnlyAdminUsersGuard],
  children: [{
    path: '',
    component: ToursComponent,
  },{
    path: 'create',
    component: CreateComponent,
  },{
    path: 'detail',
    component: TourDetailComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ToursRoutingModule { }
