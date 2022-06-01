import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterfacesRoutingModule } from './interfaces-routing.module';
import { SendInvoicesComponent } from './pages/send-invoices/send-invoices.component';
import { SendVouchersComponent } from './pages/send-vouchers/send-vouchers.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SendInvoicesComponent,
    SendVouchersComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    InterfacesRoutingModule
  ]
})
export class InterfacesModule { }
