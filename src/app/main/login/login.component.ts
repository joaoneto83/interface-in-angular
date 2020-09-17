import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdmUsuarioService } from 'src/app/_shered/service/adm-usuario.service';
import { LoadingService } from 'src/app/_shered/service/loading.service';
import { TokenService } from 'src/app/_core/services/token.service';
import * as CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  

  passo: number = 1;

  formLogin: FormGroup

  formResetar: FormGroup

  formNovaSenha: FormGroup


  constructor(private loadingService: LoadingService,
    private tokenService: TokenService,
    private usuarioService: AdmUsuarioService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.formLogin = this.formBuilder.group({
      login: ['', [Validators.required]],
      senha: ['', [Validators.required]]
  });
  }

  login() {
    if (this.formLogin.valid && !this.formLogin.pending) {

        this.loadingService.show();

        let senha = CryptoJS.HmacSHA1(this.formLogin.controls["senha"].value, 'PorElg2ER019intal').toString();
        
        this.tokenService
                .setToken(this.formLogin.controls["login"].value, senha)
                .subscribe(
                    res => this.loginSuccess(res),
                    err => this.loginError(err)
                );
    }
    else {
        Object.keys(this.formLogin.controls).forEach(key => {
            this.formLogin.get(key).markAsTouched();
        });
        return;
    }
}

loginError(err: any): void {
    console.log(err);
    
    this.loadingService.hide();

    Swal.fire(
        'Atenção',
        'Login/Senha inválidos.',
        'warning'
    );
}

loginSuccess(res: string): void {
    this.loadingService.hide();

    this.tokenService.getTokenSuccess(res);

    this.router.navigate(["home"]);
}
  

}
