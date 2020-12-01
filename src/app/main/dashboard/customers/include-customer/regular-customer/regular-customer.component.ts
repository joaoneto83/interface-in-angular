import { TokenService } from './../../../../../_core/services/token.service';
import { Clientes } from 'src/app/_shered/model/Clientes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CustomersServiceService } from '../../customers-service.service';
import { ValorTest } from './testParameter';
import { ResultDataModel } from 'src/app/_shered/model/RetornoModel';
import { RetornoDataModel } from 'src/app/_shered/model/RetornoDataModel';


@Component({
  selector: 'elgin-regular-customer',
  templateUrl: './regular-customer.component.html',
  styleUrls: ['./regular-customer.component.scss']
})
export class RegularCustomerComponent implements OnInit {

 // juridicFisicExportModel = 'isJuridic';
 /* Instancia Formulario */

  

   formCadastroClientes = new FormGroup({

    status : new FormControl(true),
    tipoPessoa: new FormControl('isJuridic'),
    nome: new FormControl(),
    cpf: new FormControl(),
    cnpj: new FormControl(),
    razaoSocial: new FormControl(),
    pais:new FormControl('Argentina'),
    area:new FormControl('Nacional'),
    cep:new FormControl(),
    codPostal:new FormControl(),
    logradouro:new FormControl(),
    numero:new FormControl(),
    complemento:new FormControl(),
    bairro:new FormControl(),
    uf:new FormControl(),
    cidade:new FormControl(),
    email:new FormControl(),
    AltEmail:new FormControl(),
    Telefone:new FormControl(),
    Celular:new FormControl(),
    grpClienteArea:new FormControl('Nacional'),
    DescGrpCliente:new FormControl()
    
});
  
  constructor(private customersService:CustomersServiceService , private tokenService:TokenService ) {
    /* Trigger para mudança de Tipo Pessoa (onChange) */
    this.formCadastroClientes.get('tipoPessoa').valueChanges.subscribe ( r => {
      this.formCadastroClientes.controls['status'].reset(true);  
      this.formCadastroClientes.controls['nome'].reset('');  
      this.formCadastroClientes.controls['cpf'].reset('');  
      this.formCadastroClientes.controls['cnpj'].reset('');  
      this.formCadastroClientes.controls['razaoSocial'].reset('');  
      this.formCadastroClientes.controls['pais'].reset('Argentina');
      this.formCadastroClientes.controls['area'].reset('Nacional');
      this.formCadastroClientes.controls['cep'].reset('');
      this.formCadastroClientes.controls['codPostal'].reset('');
      this.formCadastroClientes.controls['logradouro'].reset('');
      this.formCadastroClientes.controls['numero'].reset('');
      this.formCadastroClientes.controls['complemento'].reset('');
      this.formCadastroClientes.controls['bairro'].reset('');
      this.formCadastroClientes.controls['uf'].reset('');
      this.formCadastroClientes.controls['cidade'].reset('');
      this.formCadastroClientes.controls['email'].reset('');
      this.formCadastroClientes.controls['AltEmail'].reset('');
      this.formCadastroClientes.controls['Telefone'].reset('');
      this.formCadastroClientes.controls['Celular'].reset('');
      this.formCadastroClientes.controls['grpClienteArea'].reset('Nacional');
      this.formCadastroClientes.controls['DescGrpCliente'].reset('');
    });   

   }

  ngOnInit(): void { }

  SaveCliente(){
   
    /* Somente vincular as propriedades do form para essa propriedade  */
    let modelClienteSave:Clientes  = ValorTest;

    this.customersService.gravarCliente(this.tokenService.retornaCabecalhoRequestGlobal(),modelClienteSave)
    .subscribe(
        r => {
          console.log(r.result.data);
          
         },
        error => {
          console.log(`Erro \n ${ error }`);
        });
    
    //console.log(this.formCadastroClientes);
  }

  limparFormTotal(){
    this.formCadastroClientes.reset();
  }

}
