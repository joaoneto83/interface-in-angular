import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from './../../../../_shered/model/usuario';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TokenService } from 'src/app/_core/services/token.service';
import { RecoverPasswordService } from './recover-password.service';

import { AtualizarSenha } from 'src/shared/models/AtualizarSenhaModel';


/*
class alterPasswordModel{
  idLogin:Number;
  currentPassword:string;
  newPassword:string;
  confirmNewPassword:string;
}
*/

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit{

// ViewChilds

@ViewChild('currentPass') CurrentPassInputComponent : ElementRef;
@ViewChild('newPass') NewPassInputComponent : ElementRef;
@ViewChild('ConfirmNewPass') ConfirmInputComponent : ElementRef;
@ViewChild('btnConfirm') btnConfirmar : ElementRef;
@ViewChild('AlertGeral') alertaGeral : ElementRef;
@ViewChild('messagem') messagemGeral : ElementRef;

//bools
mostraValidacoesGeral:boolean = false;

// Msg Validações
validationSenhaAtual:string;
validationNewSenhaAtual:string;
validationConfirmSenhaAtual:string;
validationGeral:string;

/* Mensagens de informacao */

  infoSenhaAtual:string = `<b>Senha Atual</b> <br/> 
                          Esta senha deverá ser exatamente igual ao que é utilizado atualmente.
                           `;

  infoNovaSenha:string = `<b>Nova Senha</b> <br/>
                          Senha na qual deseja utilizar <br/> <br/>
                            <ul>
                              <li>Não pode ser vazio .</li>
                              <li>Deve conter entre 8 á 10 caracteres .</li>
                              <li>Não pode ser igual a senha utilizada atualmente.</li>
                              <li>Deve conter pelo menos 1 caractere maiusculo , 1 minusculo e 1 número .</li>
                            </ul>
                          `;
  infoConfirmacaoSenha:string = `<b>Confirmação de Senha</b> <br/>
                                 Confirmação da nova senha, esta deverá ser exatamente igual ao que foi digitado no campo <b>Nova Senha</b>
  
  `;

  //dadosFormulario:alterPasswordModel;


  dadosFormularioNew = new FormGroup({
        senhaAtual:new FormControl(''),
        novaSenha: new FormControl(''),
        ConfirmSenha:new FormControl('')
  });

  constructor(
    private serviceRecover:RecoverPasswordService,
    private serviceToken:TokenService) 
    { 
      //console.log(this.alertaGeral);
      //console.log('token Atual: ' + serviceToken.getToken());
    }


  ngOnInit(): void {
    this.limpaCamposCadastro(true);
  }

  
   limpaCamposCadastro(limpaValidacoes:boolean){
    /*
     this.dadosFormulario = {
       idLogin:0,
       currentPassword:'',
       newPassword:'',
       confirmNewPassword:''
     };
    */
     this.dadosFormularioNew.reset();
     this.validationSenhaAtual = '';
     this.validationNewSenhaAtual = '';
     this.validationConfirmSenhaAtual = '';

     if(limpaValidacoes){
        this.validationGeral = '';
        this.mostraValidacoesGeral = false;
     }

     this.CurrentPassInputComponent.nativeElement.className  = "form-control"; 
     this.NewPassInputComponent.nativeElement.className  = "form-control";
     this.ConfirmInputComponent.nativeElement.className  = "form-control";

     this.validaBtnConfirm();
   }


   validaSenhaOnType(){

    this.validationSenhaAtual = "";
    let valorSenhaAtual = this.dadosFormularioNew.controls['senhaAtual'].value; 
    if(valorSenhaAtual === ""){
      this.validationSenhaAtual += "* Senha atual não pode ficar em branco . <br/><br/>";
    }
/* 
    if(this.dadosFormulario.currentPassword.length < 10){
      this.validationSenhaAtual += "* Senha atual não pode ser menor que 10. <br/><br/>";
    }
*/

    if(this.validationSenhaAtual.length > 0){
      
      this.CurrentPassInputComponent.nativeElement.className  = "form-control is-invalid";

     }
     else {
      this.CurrentPassInputComponent.nativeElement.className  = "form-control is-valid";
     }

     this.validaBtnConfirm();
   }


   validaNewSenhaOnType(){
     let senhaAtual = this.dadosFormularioNew.controls['senhaAtual'].value;
     let novaSenhaValue = this.dadosFormularioNew.controls['novaSenha'].value;
     this.validationNewSenhaAtual = "";

     // Regex para validar formato de senha

     let regex:RegExp = /[A-Z]{1,}.[a-z]{1,}.[\d]{1,}./g;
      
     if(novaSenhaValue == ""){
        this.validationNewSenhaAtual += "* Nova Senha não pode ficar em branco. <br/><br/>";
     }

     if(novaSenhaValue < 8 || novaSenhaValue > 10 ){
       this.validationNewSenhaAtual += "* Nova Senha não pode ser menor que 8 e maior que 10 caracteres. <br/><br/>";
     }

     if(novaSenhaValue == senhaAtual){
       this.validationNewSenhaAtual += "* A Nova senha não pode ser igual a senha atual. <br/><br/>";
     }

     if (!novaSenhaValue.match(regex)){
      this.validationNewSenhaAtual += "* A nova senha deve conter pelo menos 1 Caractere maiusulo 1 Minusculo e 1 Numero.";
     }



     if(this.validationNewSenhaAtual.length > 0){
      
      this.NewPassInputComponent.nativeElement.className  = "form-control is-invalid";

     }
     else {
      this.NewPassInputComponent.nativeElement.className  = "form-control is-valid";
     }

     this.validaBtnConfirm();
   }


   validaConfirmSenhaOnType(){
    let NovaSenhaValue = this.dadosFormularioNew.controls['novaSenha'].value;
    let ConfirmacaoSenhaValue = this.dadosFormularioNew.controls['ConfirmSenha'].value;
    this.validationConfirmSenhaAtual = "";

    if(ConfirmacaoSenhaValue === ""){

      this.validationConfirmSenhaAtual += "Confirmação de senha não pode ser em branco.<br/><br/>";

    }

    if(ConfirmacaoSenhaValue != NovaSenhaValue){

      this.validationConfirmSenhaAtual += "Senha não confere com a confirmação.<br/><br/>";

    }

    if(this.validationConfirmSenhaAtual.length > 0){
      
      this.ConfirmInputComponent.nativeElement.className  = "form-control is-invalid";

     }
     else {
      this.ConfirmInputComponent.nativeElement.className  = "form-control is-valid";
     }

     this.validaBtnConfirm();

   }


   validaBtnConfirm(){
    let senhaAtual = this.dadosFormularioNew.controls['senhaAtual'].value;
    let NovaSenhaValue = this.dadosFormularioNew.controls['novaSenha'].value;
    let ConfirmacaoSenhaValue = this.dadosFormularioNew.controls['ConfirmSenha'].value;

     let senhaValida = (this.validationSenhaAtual.length == 0 && (senhaAtual != "" && senhaAtual != null)) ? true : false;
     let newsenhaValida = (this.validationNewSenhaAtual.length == 0 && (NovaSenhaValue != "" && NovaSenhaValue  != null)) ? true : false;
     let ConfirmsenhaValida = (this.validationConfirmSenhaAtual.length == 0 && (ConfirmacaoSenhaValue != "" && ConfirmacaoSenhaValue != null)) ? true : false;
     //console.log( this.btnConfirmar);

    // Valida se todas as validações estão de acordo para prosseguir com o submit 

     if(senhaValida && newsenhaValida && ConfirmsenhaValida){
        this.btnConfirmar.nativeElement.disabled = false;
        this.btnConfirmar.nativeElement.style.cursor = "pointer";
     }
     else
     {
      this.btnConfirmar.nativeElement.disabled = true;
      this.btnConfirmar.nativeElement.style.cursor = "not-allowed";
     }
   }


   submitFormAlter(){
     //alert("foi");
     let senhaAtual = this.dadosFormularioNew.controls['senhaAtual'].value;
     let NovaSenhaValue = this.dadosFormularioNew.controls['novaSenha'].value;
      let dataUsuario:any;
      this.serviceToken.getUser().subscribe(r => dataUsuario = r);
      //console.log(dataUsuario);
      this.serviceToken.setToken(dataUsuario.unique_name , senhaAtual)
      .subscribe(
        ()=>{

          let dadosEnvio:AtualizarSenha = {
            Id:dataUsuario.UsuarioId,
            Login:dataUsuario.unique_name,
            NovaSenha:NovaSenhaValue
          }
          // Troca a senha
          this.serviceRecover.RecuperarSenha(dadosEnvio , this.serviceToken.getToken())
          .subscribe( 
                success => {
                    if(success.result.success)
                    {
                      this.validationGeral = success.result.message[0];
                      this.mostraValidacoesGeral = true;
                      this.alertaGeral.nativeElement.className = 'alert alert-success';
                      this.limpaCamposCadastro(false);
                    }
                    else
                    {
                      success.result.message.array.forEach( message => {
                        this.validationGeral += message;
                      });
                      this.mostraValidacoesGeral = true;
                      this.alertaGeral.nativeElement.className = 'alert alert-danger';
                    }
                },
                error =>{ console.log(error) }
              );
      },
      ()=> {
        this.validationGeral = "Senha Atual incorreta !";
        this.mostraValidacoesGeral = true;
        this.alertaGeral.nativeElement.className = 'alert alert-danger';
        return false;
      });
   }
}
