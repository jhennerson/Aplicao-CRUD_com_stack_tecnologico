import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API = 'api/clientes';

  constructor(private httpClient: HttpClient) { }

  list() {
      return this.httpClient.get<Cliente[]>(this.API)
      .pipe(
        first(),
        tap(clientes => console.log(clientes))
      );
  }
}