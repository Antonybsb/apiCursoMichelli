import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})

export class PedidoComponent implements OnInit {

  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {

  }



  displayedColumns: string[] = ['position', 'midia', 'acabamento', 'largura', 'altura', 'valorUnitario', 'dgtValor', 'quantidade'];
  midia: Midia[] = [
    {value: 'lona', viewValue: 'Lona 440g'},
    {value: 'lona-promocional', viewValue: 'Lona Promocional'},
    {value: 'lona-perfurada', viewValue: 'Lona Promocional'},
    {value: 'lona-backlight', viewValue: 'Lona Sanete'},
    {value: 'adesivo-normal', viewValue: 'Adesivo Normal'},
    {value: 'adesivo-promocional', viewValue: 'Adesivo Promocional'},
    {value: 'adesivo-transparente', viewValue: 'Adesivo Transparente'},
    {value: 'adesivo-blackout', viewValue: 'Adesivo Blackout'},
    {value: 'adesivo-jateado', viewValue: 'Adesivo Jateado'},
    {value: 'adesivo-recorte', viewValue: 'Adesivo Para Recorte'},
    {value: 'adesivo-perfurado', viewValue: 'Adesivo Perfurado'},
  ];
  acabamento: Acabamento[] = [
    {value: '10-cm', viewValue: 'Sobras de 10cm'},
    {value: 'ilhos', viewValue: 'Ilhós'},
    {value: 'refilado', viewValue: 'Refilado'},
    {value: 'banner', viewValue: 'Banner'},
    {value: 'ver-observacoes', viewValue: 'Descrito Na Observação'},
  ]
  valorUnitario: ValorUnitario[] = [
    {value: 'valor-m', viewValue: 'Valor Do M²'},
    {value: 'valor-total', viewValue: 'Valor Total'},
  ]
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

}

export interface PeriodicElement {
  midia: string;
  position: number;
  acabamento: string;
  largura: number;
  altura: number;
  valorUnitario: number;
  dgtValor: number;
  quantidade: number;
}

interface Midia {
  value: string;
  viewValue: string;
}

interface Acabamento {
  value: string;
  viewValue: string;
}

interface ValorUnitario {
  value: string;
  viewValue: string;
}

/**
 *
 */
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, midia: 'Hydrogen', acabamento: 'Refilado', largura: 1.00, altura: 2.00, valorUnitario: 45.00, dgtValor: 70.00, quantidade: 5},
  {position: 2, midia: 'Helium', acabamento: 'Refilado', largura: 1.00, altura: 2.00, valorUnitario: 45.00, dgtValor: 70.00, quantidade: 5},
  {position: 3, midia: 'Lithium', acabamento: 'Refilado', largura: 1.00, altura: 2.00, valorUnitario: 45.00, dgtValor: 70.00, quantidade: 5},
  {position: 4, midia: 'Beryllium', acabamento: 'Refilado', largura: 1.00, altura: 2.00, valorUnitario: 45.00, dgtValor: 70.00, quantidade: 5},
  {position: 5, midia: 'Boron', acabamento: 'Refilado', largura: 1.00, altura: 2.00, valorUnitario: 45.00, dgtValor: 70.00, quantidade: 5},
];
