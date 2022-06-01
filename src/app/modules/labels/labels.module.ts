import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabelsRoutingModule } from './labels-routing.module';
import { AggregationComponent } from './pages/aggregation/aggregation.component';
import { CorrectionComponent } from './pages/correction/correction.component';
import { DiscardComponent } from './pages/discard/discard.component';
import { ImportComponent } from './pages/import/import.component';
import { IngressComponent } from './pages/ingress/ingress.component';
import { ReprintComponent } from './pages/reprint/reprint.component';
import { ValidationComponent } from './pages/validation/validation.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AggregationComponent,
    CorrectionComponent,
    DiscardComponent,
    ImportComponent,
    IngressComponent,
    ReprintComponent,
    ValidationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LabelsRoutingModule
  ]
})
export class LabelsModule { }
