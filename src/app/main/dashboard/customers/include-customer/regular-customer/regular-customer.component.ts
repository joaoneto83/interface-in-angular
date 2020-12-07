import { Centro } from './../../../../../_shered/model/Centro';
import { Pessoa } from 'src/app/_shered/model/pessoa';
import { Enderecos } from './../../../../../_shered/model/enderecos';
import { TokenService } from './../../../../../_core/services/token.service';
import { Clientes } from 'src/app/_shered/model/Clientes';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CustomersServiceService } from '../../customers-service.service';

import { ResultDataModel } from 'src/app/_shered/model/RetornoModel';
import { RetornoDataModel } from 'src/app/_shered/model/RetornoDataModel';
import { PessoaCommands } from 'src/app/_shered/CommandsModels/PessoaCommands';



@Component({
  selector: 'elgin-regular-customer',
  templateUrl: './regular-customer.component.html',
  styleUrls: ['./regular-customer.component.scss']
})
export class RegularCustomerComponent implements OnInit {

   FactoryModelRequests = new PessoaCommands();
   postParameterPessoa = this.FactoryModelRequests.CreatePessoaCommand();

   /* Novo formulario 

   formCadastroClientes = new FormBuilder().group({
    status : [this.postParameterPessoa.Ativo],
    tipoPessoa: [this.postParameterPessoa.tipoPessoaId],
    nome: [this.postParameterPessoa.nome],
    cpf: [this.postParameterPessoa.numeroDocumento],
    cnpj: [this.postParameterPessoa.numeroDocumento],
   // razaoSocial:[this.postParameterPessoa.,
    pais:[this.postParameterPessoa.endereco[0].PaisId],
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
   
    */


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
    /* Trigger para mudança de Tipo Pessoa (onChange) 
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
*/
   }

  ngOnInit(): void { }

  SaveCliente(){
   
    this.postParameterPessoa = {
        numeroDocumento:"630.121.430-76",
        nome:"teste_pessoa",
        tipoPessoaId:1,
        intercompany:true,
        restricaoFinanceira:false,
        endereco:[{
           TipoEnderecoid:1,
           CidadeId:1100015,
           Logradouro:'teste logra',
           Numero:'123',
           Complemento:'teste complemento',
           Bairro:'teste',
           CEP:'te',
           CidadeExt:'',
           Principal:true,
           PaisId:38,
           Ativo:true
        }],
        telefone:[{
          TipoTelefoneId :1,
          Descricao:'11997083252',
          Ativo:true
        }],
        email:[{
            TipoEmailId:1,
            Descricao:"email.teste@hotmail.com",
            Ativo:true
          }],
        documento:[{
             TipoDocumentoId:1,
             OrgaoEmissao:'SSP',
             DescricaoDocumento:'2803086792',
             DataValidade:'2020-10-15T14:19:13.169Z',
             DataSituacao:'2020-10-15T14:19:13.169Z',
             DataEmissao:'2020-10-15T14:19:13.169Z',
             Ativo:true
          }],
        cliente:[{
          
          StatusSuframa:true,
          Cnae:'',
          Ativo:true,
          Atributo1:'atr',
          CodigoSuframa:'cod',
          DataUltimaVerificacaoSuframa:'04/12/2020'
        }],
        Ativo:true
    }
    
    console.log(JSON.stringify(this.postParameterPessoa));
   

    this.customersService.gravarCliente(this.tokenService.retornaCabecalhoRequestGlobal(),this.postParameterPessoa)
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
    //this.formCadastroClientes.reset();
  }

}
