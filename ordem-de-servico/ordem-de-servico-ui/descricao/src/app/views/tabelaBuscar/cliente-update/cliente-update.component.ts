import { ClienteService } from 'src/app/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../clientes/cliente/cliente';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cliente: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
    ){
      this.cliente = new Cliente();
    }


  /**
   * Essa inicialização é responsável por carregar o formulário preenchido de forma automática na hora de
   * editar o cliente. O id passado aqui é configurado como parâmetro no caminho que foi definido na rota do app-routing-model
   */
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.clienteService.readById(id).subscribe((cliente) => {
      this.cliente = cliente
    });
  }

  updateCliente(): void {
    this.clienteService.update(this.cliente).subscribe(() => {
      this.clienteService.showMessage
    })
    this.clienteService.showMessage("Cliente atualizado com sucesso!");
    this.router.navigate(['/buscar-clientes']);
  }

  cancel(): void {
    this.router.navigate(['/buscar-clientes'])
  }

  onSubmit() {

  }

}
