import { HomeService } from './../../home/services/home.service';
import { Home } from './../../home/model/home';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  home: Observable<Home[]>;
  displayedColumns: string[] = ['item', 'midia', 'acabamento', 'largura', 'altura', 'valorUnitario', 'quantidade', 'valorTotal'];
  dataSource = ELEMENT_DATA;

 // homeService: HomeService;

  constructor(private homeService: HomeService){
    //this.homeService = new HomeService();
    this.home = this.homeService.list();

  }

  ngOnInit(): void {

  }

  midia: string[] = [
    'Lona 440g',
    'Lona Promocional',
    'Vinil Cast',
    'Vinil Promocional',
    'Vinil Transparente',
    'Vinil Blackout',
    'Vinil Jateado',
    'Vinil Para Recorte',
    'Vinil Perfurado',
    'Vinil Impresso e Aplicado no PVC',
    'Vinil Impresso e Recortado',
    'Vinil + Refile',
    'Vinil',
  ];
  acabamento: string[] = [
    'Banner',
    'Refilado',
    'Sobras Para Esticar',
    'Ilhós',
    'Ver Observações',
  ];
  valor: string[] = [
    'Preço m²',
    'Preço Total',
  ];
}

/*Tabela com adição e remoção*/






/**Inicio Table Loiane*/
export interface PeriodicElement {
  item: number;
  midia: string;
  acabamento: string;
  largura: number;
  altura: number;
  valorUnitario: number;
  quantidade: number;
  valorTotal: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {item: 1, midia: 'Adesivo', acabamento: 'Refilado', largura: 0.80, altura: 1.20, valorUnitario: 70.00, quantidade: 1, valorTotal: 70.00},

];


function calcular(larg: number, alt: number, valorM: number, qtd: number, valorTot: number): number {
  let resultadoMultiplicacao: number = larg * alt * valorM;
  let resultadoFinal: number = resultadoMultiplicacao * valorTot;
  return valorTot;
}

function adicionar() {
  //pega os valores da linha, calcula o valor total utilizando a função "calcular" e persiste os dados no banco de dados
  //ao persistir no banco de dados, dar um refresh na grid
}

let resultado: number = calcular(5,2,45,2,50);
console.log(resultado);
