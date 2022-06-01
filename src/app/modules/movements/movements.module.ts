import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementsRoutingModule } from './movements-routing.module';
import { ManualComponent } from './pages/manual/manual.component';
import { OthersComponent } from './pages/others/others.component';
import { QueryComponent } from './pages/query/query.component';
import { ReceptionComponent } from './pages/reception/reception.component';
import { ShipmentsComponent } from './pages/shipments/shipments.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ManualComponent,
    OthersComponent,
    QueryComponent,
    ReceptionComponent,
    ShipmentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MovementsRoutingModule
  ]
})
export class MovementsModule { }
