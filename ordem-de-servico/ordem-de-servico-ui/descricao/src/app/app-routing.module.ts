import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OsComponent } from './views/ordemServico/os/os.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'cadastro-de-clientes',
    component: HomeComponent,
  },
  {
    path: 'os',
    component: OsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
