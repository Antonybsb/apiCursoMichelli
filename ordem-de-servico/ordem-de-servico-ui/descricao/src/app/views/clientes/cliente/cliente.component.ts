import { Component, OnInit } from '@angular/core';

import { Cliente } from './cliente';
import { ClienteService } from 'src/app/cliente.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

/**
 * Aqui os dados ficam armazenados aoenas na memória
 */
export class ClienteComponent implements OnInit {

  cliente: Cliente;

  constructor( private service: ClienteService) {
    this.cliente = new Cliente();



  }



  ngOnInit(): void {


  }

  clienteSalvo(): void {
    this.service.showMessageSalvar('Cliente Salvo Com Sucesso!')


  }

  /**
   * O método onSubmit é responsável por acessar a API após o click no botão salvar.
   */
  onSubmit(){
    this.service.salvar(this.cliente).subscribe( response => {
      this.service.navegarHome()
    } )
  }



}
