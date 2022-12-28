import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { EditTravelsComponent } from '../travels/edit-travels/edit-travels.component';
import { FinishedTravelsComponent } from '../travels/finished-travels/finished-travels.component';
import { CreateTravelsComponent } from '../travels/create-travels/create-travels.component';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SidebarComponent,
    EditTravelsComponent,
    FinishedTravelsComponent,
    CreateTravelsComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
