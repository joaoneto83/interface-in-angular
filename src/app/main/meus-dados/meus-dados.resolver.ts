import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


import { TokenService } from '../../../app/_core/services/token.service';
import { Usuario } from 'src/app/_shered/model/usuario';
import { AdmUsuarioService } from 'src/app/_shered/service/adm-usuario.service';

@Injectable({ providedIn: 'root'})
export class MeusDadosResolver implements Resolve<Observable<Usuario>>{

    constructor(private service: AdmUsuarioService,
                private tokenService: TokenService) {}

    resolve(): Observable<Usuario> {

        return this.service.getUsuario(this.tokenService.Id);
    }
}