import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.hmg';
import { searchParameters } from './query-customer.component';

@Injectable()
export class QueryServiceService {

  constructor(private Client:HttpClient) { }

    getConsutaCliente(cabecalho , dadosPesquisa:searchParameters):Observable<any>{
        return this.Client.get<any>(`${ environment.PORTAL_API }/Pessoas?Nome='${dadosPesquisa.Nome}'&CodigoERP='${dadosPesquisa.CodERP}'&NumeroDocumento='${dadosPesquisa.NumDoc}'`, cabecalho);
    } 



}
