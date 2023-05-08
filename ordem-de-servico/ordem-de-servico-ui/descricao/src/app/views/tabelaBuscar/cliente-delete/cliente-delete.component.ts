import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente/cliente';
import { ClienteService } from 'src/app/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css'],
})
export class ClienteDeleteComponent implements OnInit {
  cliente: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.clienteService.readById(id).subscribe((cliente) => {
      this.cliente = cliente;
    });
  }

  deleteCliente(): void {
    this.clienteService.delete(this.cliente.id).subscribe((response) => {
      this.clienteService.showMessage
    })
    this.clienteService.showMessage('Cliente excluído com sucesso!');
    this.router.navigate(['/buscar-clientes']);
  }

  cancel(): void {
    this.router.navigate(['/buscar-clientes']);
  }

  onSubmit() {}
}
