import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ToursRoutingModule } from './tours-routing.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    // ToursRoutingModule,
  ],
  providers: [

  ]
})
export class UserModule { }
