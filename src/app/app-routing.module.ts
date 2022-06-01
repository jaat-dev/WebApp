import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [ { path: '', component: HomeComponent }, ]
  },
  {
    path: 'etiquetas', component: LayoutComponent,
    loadChildren: () => import('./modules/labels/labels.module').then(m => m.LabelsModule)
  },
  {
    path: 'movimientos', component: LayoutComponent,
    loadChildren: () => import('./modules/movements/movements.module').then(m => m.MovementsModule)
  },
  {
    path: 'interfaces', component: LayoutComponent,
    loadChildren: () => import('./modules/interfaces/interfaces.module').then(m => m.InterfacesModule)
  },
  {
    path: 'administracion', component: LayoutComponent,
    loadChildren: () => import('./modules/management/management.module').then(m => m.ManagementModule)
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
