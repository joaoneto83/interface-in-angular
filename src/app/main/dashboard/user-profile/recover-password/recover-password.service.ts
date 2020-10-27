import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/_shered/model/usuario';
import { environment } from 'src/environments/environment';
import { AtualizarSenha } from 'src/shared/models/AtualizarSenhaModel';

@Injectable()
export class RecoverPasswordService {

  constructor(private http:HttpClient) { }


  RecuperarSenha(senhaAtualizada:AtualizarSenha, token:string){
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const options = { headers : reqHeader };

    return this.http.post(
    `${environment.PORTAL_API}/Login/AtualizarSenha`,
    senhaAtualizada , options );
  }
}
