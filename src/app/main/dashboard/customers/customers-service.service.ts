import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.hmg';


@Injectable()
export class CustomersServiceService {

  constructor(private Client:HttpClient) { }


  /* Consulta Clientes  */
  getConsutaCliente(cabecalho , queryString:string):Observable<any>{
    return this.Client.get<any>(`${ environment.PORTAL_API }/Pessoas?${queryString}`, cabecalho);
  } 






}
