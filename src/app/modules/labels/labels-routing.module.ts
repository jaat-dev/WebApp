import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggregationComponent } from './pages/aggregation/aggregation.component';
import { CorrectionComponent } from './pages/correction/correction.component';
import { DiscardComponent } from './pages/discard/discard.component';
import { ImportComponent } from './pages/import/import.component';
import { IngressComponent } from './pages/ingress/ingress.component';
import { ReprintComponent } from './pages/reprint/reprint.component';
import { ValidationComponent } from './pages/validation/validation.component';

const routes: Routes = [
  { path: '', 
    children: [
      { path: 'agregacion', component: AggregationComponent },
      { path: 'correccion', component: CorrectionComponent },
      { path: 'descarte', component: DiscardComponent },
      { path: 'importacion', component: ImportComponent },
      { path: 'ingreso', component: IngressComponent },
      { path: 're-impresion', component: ReprintComponent },
      { path: 'validacion', component: ValidationComponent },
      { path: '**', redirectTo: '/not-found' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabelsRoutingModule { }
