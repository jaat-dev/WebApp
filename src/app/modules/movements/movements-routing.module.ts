import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManualComponent } from './pages/manual/manual.component';
import { OthersComponent } from './pages/others/others.component';
import { QueryComponent } from './pages/query/query.component';
import { ReceptionComponent } from './pages/reception/reception.component';
import { ShipmentsComponent } from './pages/shipments/shipments.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'envios', component: ShipmentsComponent },
      { path: 'recepcion', component: ReceptionComponent },
      { path: 'otros', component: OthersComponent },
      { path: 'manual', component: ManualComponent },
      { path: 'consulta', component: QueryComponent },
      { path: '**', redirectTo: '/not-found'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementsRoutingModule { }
