import { MenuLateral } from './../../_shered/model/MenuLateral';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.hmg';
import { RetornoDataModel } from 'src/app/_shered/model/RetornoDataModel';




@Injectable()
export class MenuServiceService {


  
  constructor(private Client:HttpClient) { }

  getEstruturaMenuLateral({idPerfil , cabecalho}):Observable<any>{
    return this.Client.get<any>(`${ environment.PORTAL_API }/PerfisMenusAcoes/Menu/?perfilId=${idPerfil}`,cabecalho);
  }
   



}
