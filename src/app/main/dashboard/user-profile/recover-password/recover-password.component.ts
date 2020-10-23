import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TokenService } from 'src/app/_core/services/token.service';
import { RecoverPasswordService } from './recover-password.service';



class alterPasswordModel{
  idLogin:Number;
  currentPassword:string;
  newPassword:string;
  confirmNewPassword:string;
}


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


// Msg Validações
validationSenhaAtual:string;
validationNewSenhaAtual:string;
validationConfirmSenhaAtual:string;

  dadosFormulario:alterPasswordModel;

  constructor(
    private serviceRecover:RecoverPasswordService,
    private serviceToken:TokenService
    ) 
    { 
      console.log('token Atual: ' + serviceToken.getToken());
    }


  ngOnInit(): void {
    this.limpaCamposCadastro();
  }

   getMensagem(){
     return this.serviceRecover.msgTeste().subscribe(
      (res) => {
        console.log(res);
      },(error)=>{
        console.log(error);
      }

     );
   }

   limpaCamposCadastro(){

     this.dadosFormulario = {
       idLogin:0,
       currentPassword:'',
       newPassword:'',
       confirmNewPassword:''
     };

     this.validationSenhaAtual = '';
     this.validationNewSenhaAtual = '';
     this.validationConfirmSenhaAtual = '';

     this.CurrentPassInputComponent.nativeElement.className  = "form-control"; 
     this.NewPassInputComponent.nativeElement.className  = "form-control";
     this.ConfirmInputComponent.nativeElement.className  = "form-control";

     this.validaBtnConfirm();
   }


   validaSenhaOnType(){

    this.validationSenhaAtual = "";

    if(this.dadosFormulario.currentPassword === ""){
      this.validationSenhaAtual += "* Senha atual não pode ficar em branco . <br/><br/>";
    }

    if(this.dadosFormulario.currentPassword.length < 10){
      this.validationSenhaAtual += "* Senha atual não pode ser menor que 10. <br/><br/>";
    }


    if(this.validationSenhaAtual.length > 0){
      
      this.CurrentPassInputComponent.nativeElement.className  = "form-control is-invalid";

     }
     else {
      this.CurrentPassInputComponent.nativeElement.className  = "form-control is-valid";
     }

     this.validaBtnConfirm();
   }


   validaNewSenhaOnType(){

     this.validationNewSenhaAtual = "";

     // Regex para validar formato de senha

     let regex:RegExp = /[A-Z]{1,}.[a-z]{1,}.[\d]{1,}./g;
      
     if(this.dadosFormulario.newPassword == ""){
        this.validationNewSenhaAtual += "* Nova Senha não pode ficar em branco. <br/><br/>";
     }

     if(this.dadosFormulario.newPassword.length < 8 || this.dadosFormulario.newPassword.length > 10 ){
       this.validationNewSenhaAtual += "* Nova Senha não pode ser menor que 8 e maior que 10 caracteres. <br/><br/>";
     }

     if(this.dadosFormulario.newPassword == this.dadosFormulario.currentPassword){
       this.validationNewSenhaAtual += "* A Nova senha não pode ser igual a senha atual. <br/><br/>";
     }

     if (!this.dadosFormulario.newPassword.match(regex)){
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

    this.validationConfirmSenhaAtual = "";

    if(this.dadosFormulario.confirmNewPassword === ""){

      this.validationConfirmSenhaAtual += "Confirmação de senha não pode ser em branco.<br/><br/>";

    }

    if(this.dadosFormulario.confirmNewPassword != this.dadosFormulario.newPassword){

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
     let senhaValida = (this.validationSenhaAtual.length == 0 && (this.dadosFormulario.currentPassword != "" && this.dadosFormulario.currentPassword != null)) ? true : false;
     let newsenhaValida = (this.validationNewSenhaAtual.length == 0 && (this.dadosFormulario.newPassword != "" && this.dadosFormulario.newPassword != null)) ? true : false;
     let ConfirmsenhaValida = (this.validationConfirmSenhaAtual.length == 0 && (this.dadosFormulario.confirmNewPassword != "" && this.dadosFormulario.confirmNewPassword != null)) ? true : false;
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
     alert("foi");
     
     this.limpaCamposCadastro();
   }

}
