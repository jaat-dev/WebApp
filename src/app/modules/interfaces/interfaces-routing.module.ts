import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendInvoicesComponent } from './pages/send-invoices/send-invoices.component';
import { SendVouchersComponent } from './pages/send-vouchers/send-vouchers.component';

const routes: Routes = [
  { path: '', 
    children: [
      { path: 'envio-remitos', component: SendVouchersComponent },
      { path: 'envio-facturas', component: SendInvoicesComponent },
      { path: '**', redirectTo: '/not-found' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterfacesRoutingModule { }
