import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseCuitGlnComponent } from './pages/base-cuit-gln/base-cuit-gln.component';
import { BaseGtinComponent } from './pages/base-gtin/base-gtin.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'usuarios', component: UsersComponent },
      { path: 'base-cuit-gln', component: BaseCuitGlnComponent },
      { path: 'base-gtin', component: BaseGtinComponent },
      { path: '**', redirectTo: '/not-found'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
