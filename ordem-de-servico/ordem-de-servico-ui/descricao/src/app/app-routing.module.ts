import { PedidoComponent } from './views/pedido/pedido/pedido.component';
import { ClienteComponent } from './views/clientes/cliente/cliente.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OsComponent } from './views/ordemServico/os/os.component';

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
    path: 'os',
    component: OsComponent,
  },
  {
    path: 'pedido',
    component: PedidoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
