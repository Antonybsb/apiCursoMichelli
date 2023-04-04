import { Component, OnInit } from '@angular/core';

import { Cliente } from './cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente;

  constructor() {
    this.cliente = new Cliente();

  }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.cliente);
  }

}
