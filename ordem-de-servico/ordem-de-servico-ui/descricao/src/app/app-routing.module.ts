import { PedidoComponent } from './views/pedido/pedido/pedido.component';
import { ClienteComponent } from './views/clientes/cliente/cliente.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OsComponent } from './views/ordemServico/os/os.component';
import { BuscarClienteComponent } from './views/tabelaBuscar/buscar-cliente/buscar-cliente.component';
import { ClienteUpdateComponent } from './views/tabelaBuscar/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './views/tabelaBuscar/cliente-delete/cliente-delete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cadastro-de-clientes',
    component: ClienteComponent,
  },
  {
    path: 'buscar-clientes',
    component: BuscarClienteComponent,
  },
  {
    path: 'os',
    component: OsComponent,
  },
  {
    path: 'pedido',
    component: PedidoComponent,
  },
  {
    path: 'clientes/update/:id',
    component: ClienteUpdateComponent,
  },
  {
    path: 'clientes/delete/:id',
    component: ClienteDeleteComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
