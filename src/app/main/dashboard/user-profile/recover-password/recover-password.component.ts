import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
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

  constructor(private service:RecoverPasswordService) { }


  ngOnInit(): void {
    this.limpaCamposCadastro();
    
  }

   getMensagem(){
     return this.service.msgTeste().subscribe(
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

     if(this.dadosFormulario.newPassword === ""){
        this.validationNewSenhaAtual += "* Nova Senha não pode ficar em branco. <br/><br/>";
     }

     if(this.dadosFormulario.newPassword.length < 10 ){
       this.validationNewSenhaAtual += "* Nova Senha não pode ser menor que 10 caracteres. <br/><br/>";
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
      console.log( this.btnConfirmar);
     if(senhaValida && newsenhaValida && ConfirmsenhaValida){
        this.btnConfirmar.nativeElement.className = "btn btn-success";
        this.btnConfirmar.nativeElement.style.cursor = "pointer";
     }
     else
     {
      this.btnConfirmar.nativeElement.className = "btn btn-success disabled";
      this.btnConfirmar.nativeElement.style.cursor = "not-allowed";
     }

   }



}
