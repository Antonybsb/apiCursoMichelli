import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BuscarClienteDataSource } from './buscar-cliente-datasource';
import { Cliente } from '../../clientes/cliente/cliente';
import { ClienteService } from 'src/app/cliente.service';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent implements AfterViewInit, OnInit {

  clientes!: Cliente[]


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Cliente>;
  dataSource: BuscarClienteDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nome', 'endereco', 'bairro', 'cidade', 'estado', 'cpf', 'fone', 'data_registro', 'acao'];

  constructor(private clienteService: ClienteService) {
    this.dataSource = new BuscarClienteDataSource();
  }

  /**
   * Aqui é responsável por carregar os dados buscados na API na inicialização do componente
   */
  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes
      console.log(clientes)
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }


}
