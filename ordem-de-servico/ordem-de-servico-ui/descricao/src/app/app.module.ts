import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteService } from './cliente.service';
import { ClienteComponent } from './views/clientes/cliente/cliente.component';
import { HomeComponent } from './views/home/home.component';
import { OsComponent } from './views/ordemServico/os/os.component';
import { PedidoComponent } from './views/pedido/pedido/pedido.component';
import { SidenavComponent } from './views/sidnav/sidenav/sidenav.component';
import { HeaderComponent } from './views/header/header/header.component';
import { BuscarClienteComponent } from './views/tabelaBuscar/buscar-cliente/buscar-cliente.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ClienteUpdateComponent } from './views/tabelaBuscar/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './views/tabelaBuscar/cliente-delete/cliente-delete.component';

registerLocaleData(localePt);





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OsComponent,
    ClienteComponent,
    PedidoComponent,
    SidenavComponent,
    HeaderComponent,
    BuscarClienteComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    MatSidenavModule,
    MatDatepickerModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [{

    provide: LOCALE_ID,
    useValue: 'pt-BR',
  },
  ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
