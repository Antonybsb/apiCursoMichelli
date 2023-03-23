import { Home } from './../model/home';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly API = '/assets/home.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Home[]>(this.API)
    .pipe(tap(materiais => console.log(materiais)));
  }

}
