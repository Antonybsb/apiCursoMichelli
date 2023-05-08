import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Cliente } from '../../clientes/cliente/cliente';


// TODO: replace this with real data from your application
const EXAMPLE_DATA: Cliente[] = [
  {id: '1', nome: 'Hydrogen', endereco: 'QNM 34', bairro: 'Alvorada', cidade: 'Anápolis', estado: 'GO', cpf: '00000000000', fone: '99999999999',},
  {id: '2', nome: 'Helium', endereco: 'QNM 34', bairro: 'Alvorada', cidade: 'Anápolis', estado: 'GO', cpf: '00000000000', fone: '99999999999',},
  {id: '3', nome: 'Lithium', endereco: 'QNM 34', bairro: 'Alvorada', cidade: 'Anápolis', estado: 'GO', cpf: '00000000000', fone: '99999999999',},
  {id: '4', nome: 'Beryllium', endereco: 'QNM 34', bairro: 'Alvorada', cidade: 'Anápolis', estado: 'GO', cpf: '00000000000', fone: '99999999999',},

];

/**
 * Data source for the BuscarCliente view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class BuscarClienteDataSource extends DataSource<Cliente> {
  data: Cliente[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Cliente[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Cliente[]): Cliente[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Cliente[]): Cliente[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'nome': return compare(a.nome, b.nome, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/nome columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
