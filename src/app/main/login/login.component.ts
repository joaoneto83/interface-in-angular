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

  corretor:boolean;

  constructor(private loadingService: LoadingService,
    // private tokenService: TokenService,
    // private usuarioService: AdmUsuarioService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.corretor=false;
    this.formLogin = this.formBuilder.group({
      login: ['', [Validators.required]],
      senha: ['', [Validators.required]]
  });
  }



login() {
  this.corretor=true;
    this.router.navigate(["/home"]);
    console.log(this.router);

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

    // this.tokenService.getTokenSuccess(res);

    this.router.navigate(["home"]);
}
  

}
