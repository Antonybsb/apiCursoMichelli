import { Component, OnInit } from '@angular/core';

import { Cliente } from './cliente';
import { ClienteService } from 'src/app/cliente.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

/**
 * Aqui os dados ficam armazenados apenas na memória
 */
export class ClienteComponent implements OnInit {

  cliente: Cliente = new Cliente;

  estados: string[] = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins',
  ];


  constructor( private clienteService: ClienteService,
    private router: Router
    ) { }


  ngOnInit(): void {


  }

  createCliente(): void {
    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.showMessage
    })
    this.clienteService.showMessage('Cliente Cadastrado com Sucesso!');
    this.router.navigate(['/buscar-clientes']);
  }

 /*  clienteSalvo(): void {
    this.service.showMessageSalvar('Cliente Salvo Com Sucesso!');

  } */



  /**
   * O método onSubmit é responsável por acessar a API após o click no botão salvar.
   */
 /*  onSubmit(){
    this.service.salvar(this.cliente).subscribe( response => {
      this.service.navegarHome();

    } )
  } */

  cancel(): void {
    this.router.navigate(['/buscar-clientes']);
  }


}
