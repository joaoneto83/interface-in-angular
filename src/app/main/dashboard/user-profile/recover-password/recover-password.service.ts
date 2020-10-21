import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/_shered/model/usuario';
import { environment } from 'src/environments/environment';

@Injectable()
export class RecoverPasswordService {

  constructor(private http:HttpClient) { }

  msgTeste():Observable<Usuario>{
    return this.http.get<Usuario>(
  `${environment.PORTAL_API}/Usuario/3`);
  }
}
