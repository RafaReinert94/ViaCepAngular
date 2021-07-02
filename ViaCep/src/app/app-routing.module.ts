import { AddComponent } from './add/add.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  redirectTo: '/clientes',
  pathMatch: 'full',
},
{
  path: 'clientes',
  component: ClientesComponent
},
{
  path: 'add',
  component: AddComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
