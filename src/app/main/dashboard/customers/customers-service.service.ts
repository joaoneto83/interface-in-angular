import { map } from 'rxjs/operators';
import { Cliente } from './../../../_shered/model/cliente_';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Clientes } from 'src/app/_shered/model/Clientes';
import { environment } from 'src/environments/environment.hmg';
import { searchParameters } from './query-customer/query-customer.component';
import { RetornoDataModel } from 'src/app/_shered/model/RetornoDataModel';
import { Pessoa } from 'src/app/_shered/model/pessoa';
import { PesquisaAprovacaoModel } from './approve-customer/approve-customer.component';
import { AprovacaoCadastral } from 'src/app/_shered/model/AprovacaoCadastral';
import { AproveReproveClienteModel } from 'src/app/_shered/model/AproveReproveClienteModel';


@Injectable()
export class CustomersServiceService {

  constructor(private Client:HttpClient) { }


  // #region incluir clientes 

    /* Inclui Clientes - model incompleta precisa ajustar */
    gravarCliente( cabecalho , modelCliente:Clientes ):Observable<RetornoDataModel<Clientes>>{
      //console.log(cabecalho);
      //console.log(JSON.stringify(modelCliente));
      return this.Client.post(`${ environment.PORTAL_API }/Clientes`,modelCliente , cabecalho)
      .pipe(map(response => Object.assign(new RetornoDataModel<Clientes>(), response )));
    }

  // #endregion



  //#region Consulta Clientes

  /* Consulta Clientes  */
  getConsutaCliente(cabecalho , modelPesquisa:searchParameters):Observable<RetornoDataModel<Pessoa[]>>{
    // console.log(`${ environment.PORTAL_API }/Pessoas?Nome=${modelPesquisa.Nome}&CodigoERP=${modelPesquisa.CodERP}&NumeroDocumento=${modelPesquisa.NumDoc}${modelPesquisa.QueryTipoPessoa}`);
     return this.Client.get<any>(`${ environment.PORTAL_API }/Pessoas?Nome=${modelPesquisa.Nome}&CodigoERP=${modelPesquisa.CodERP}&NumeroDocumento=${modelPesquisa.NumDoc}${modelPesquisa.QueryTipoPessoa}`, cabecalho)
     .pipe(map(response => Object.assign(new RetornoDataModel<Pessoa[]>() , response ) ));
   } 
 
//#endregion


  //#region Aprovar Clientes 

  /* Aprova Clientes */
  getListagemAprovacaoCliente(cabecalho):Observable<RetornoDataModel<AprovacaoCadastral[]>>{
    //console.log(`${environment.PORTAL_API}​/Pessoas/GridAprovacaoCadastral`);
    return this.Client.get<any>(`${environment.PORTAL_API}/Pessoas/GridAprovacaoCadastral`,cabecalho)
    .pipe(map(response => Object.assign(new RetornoDataModel<AprovacaoCadastral[]>() , response)));
  }

  /* Em construção - precisa verificar se rota funciona de forma certa -  01/12/2020 */
  ApproveReproveCliente(cabecalho, modelAprovarReprovar:AproveReproveClienteModel):Observable<RetornoDataModel<AproveReproveClienteModel>>{
    return this.Client.post<any>(`${environment.PORTAL_API}/api/AprovacoesCadastraisClientes`, modelAprovarReprovar , cabecalho)
    .pipe(map(response => Object.assign(new RetornoDataModel<AproveReproveClienteModel>(), response )));

  }

//#endregion







}
