import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.hmg';
import { searchParameters } from './query-customer/query-customer.component';

@Injectable()
export class CustomersServiceService {

  constructor(private Client:HttpClient) { }


  /* Consulta Clientes  */
  getConsutaCliente(cabecalho , dadosPesquisa:searchParameters):Observable<any>{
    return this.Client.get<any>(`${ environment.PORTAL_API }/Pessoas?Nome=${dadosPesquisa.Nome}&CodigoERP=${dadosPesquisa.CodERP}&NumeroDocumento=${dadosPesquisa.NumDoc}`, cabecalho);
  } 






}
