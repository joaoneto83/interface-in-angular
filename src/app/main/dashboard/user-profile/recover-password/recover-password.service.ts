import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AtualizarSenha } from 'src/shared/models/AtualizarSenhaModel';

@Injectable()
export class RecoverPasswordService {

  constructor(private http:HttpClient) { }

  
  RecuperarSenha(senhaAtualizada:AtualizarSenha, token:string) : Observable<any> {
    
    // Declara cabeçalho requisicao
    const HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
      responseType: 'json' as const 
    };

    // Manda requisição POST
    return this.http.post<Observable<any>>(`${environment.PORTAL_API}/Login/AlterarSenha`, senhaAtualizada  , HttpOptions); 
  }
}
