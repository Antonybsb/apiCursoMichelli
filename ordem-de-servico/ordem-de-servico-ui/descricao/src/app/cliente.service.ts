import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cliente } from './views/clientes/cliente/cliente';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:8080/cadastro-de-cliente"

  constructor( private http: HttpClient, private snackBar: MatSnackBar, private router: Router) {
  }


  salvar(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente);
  }

  read(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl)
  }

  getCliente() : Cliente {
    let cliente : Cliente = new Cliente();
    cliente.nome = 'Marajó';
    cliente.cpf = '00000000000';
    cliente.cidade = 'Gouverlandia';
    return cliente;
  }

  showMessageSalvar(msg: string) : void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  navegarHome() : void {
    this.router.navigate([''])
  }

}
