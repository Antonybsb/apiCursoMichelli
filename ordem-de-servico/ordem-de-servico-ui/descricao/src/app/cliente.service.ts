import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cliente } from './views/clientes/cliente/cliente';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


/**
 * Tudo que diz respeito ao backend precisar ser inserido aqui no service +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  [x: string]: any;

  baseUrl = "http://localhost:8080/cadastro-de-cliente"


  constructor( private http: HttpClient, private snackBar: MatSnackBar, private router: Router) {
  }


/*   salvar(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente);
  } */

  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl, cliente)
  }

  read(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl)
  }

  /**
   * O this.baseUrl está concatenando com o id do cliente
  */
  readById(id: string): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cliente>(url)
  }

  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/${cliente.id}`
    return this.http.put<Cliente>(url, cliente)
  }

  delete(id: string): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Cliente>(url);

  }

  showMessage(msg: string) : void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: ['msg-success']
    })
  }

  /* showMessage(message: string, isError: boolean = false): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: isError ? ['snackbar-error'] : ['snackbar-success']
    });
  }

  showMessageDeletar(msg: string) : void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
    const mensagem = { mensagem: msg};
    this['messageSource'].next(mensagem)
  } */

  navegarHome() : void {
    this.router.navigate([''])
  }

}
