
import { Component, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.css']
})

export class OsComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'altura'];

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
  name: string;
  position: number;
  weight: number;
  symbol: string;
  altura: number;
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

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', altura: 1.50},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', altura: 1.50},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', altura: 1.50},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', altura: 1.50},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', altura: 1.50},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', altura: 1.50},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', altura: 1.50},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', altura: 1.50},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', altura: 1.50},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', altura: 1.50},
];




