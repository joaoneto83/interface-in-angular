import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Clientes } from 'src/app/_shered/model/Clientes';
import { environment } from 'src/environments/environment.hmg';
import { searchParameters } from './query-customer/query-customer.component';


@Injectable()
export class CustomersServiceService {

  constructor(private Client:HttpClient) { }


/* Inclui Clientes - model incompleta precisa ajustar */
  gravarCliente(cabecalho, modelCliente:Clientes):Observable<any>{
    return this.Client.post<any>(`${ environment.PORTAL_API }/api/Clientes`,modelCliente,cabecalho);
  }


  /* Consulta Clientes  */
  getConsutaCliente(cabecalho , modelPesquisa:searchParameters):Observable<any>{
    return this.Client.get<any>(`${ environment.PORTAL_API }/Pessoas?Nome=${modelPesquisa.Nome}&CodigoERP=${modelPesquisa.CodERP}&NumeroDocumento=${modelPesquisa.NumDoc}${modelPesquisa.QueryTipoPessoa}`, cabecalho);
  } 



/* Aprova Clientes */

getListagemAprovacaoCliente(cabecalho):Observable<any>{
  return this.Client.get<any>(`${ environment.PORTAL_API }/api/Pessoas?Includes=AlteracaoCadastralCliente&codigoERP=`)
}





}
