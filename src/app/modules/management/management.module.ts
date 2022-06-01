import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { BaseCuitGlnComponent } from './pages/base-cuit-gln/base-cuit-gln.component';
import { BaseGtinComponent } from './pages/base-gtin/base-gtin.component';
import { UsersComponent } from './pages/users/users.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BaseCuitGlnComponent,
    BaseGtinComponent,
    UsersComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
