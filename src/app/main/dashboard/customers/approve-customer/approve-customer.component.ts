import { TokenService } from 'src/app/_core/services/token.service';

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { client } from './../../../../../shared/ObejctMock/client';
import { CustomerDetailModalComponent } from '../customer-detail-modal/customer-detail-modal.component';
import { TipoPessoaCheckBox } from 'src/app/_shered/model/TipoPessoaCheckBox';
import { CustomersServiceService } from '../customers-service.service';
import { AprovacaoCadastral } from 'src/app/_shered/model/AprovacaoCadastral';
import { AproveReproveClienteModel } from 'src/app/_shered/model/AproveReproveClienteModel';


export class PesquisaAprovacaoModel {
  numeroDoc:string;
  Nome:string;
  queryString:string;
}


@Component({
  selector: 'elgin-approve-customer',
  templateUrl: './approve-customer.component.html',
  styleUrls: ['./approve-customer.component.scss']
})
export class ApproveCustomerComponent implements OnInit {

  clients = ['1215151515000198', '2215151515000198'];
  isSelected: boolean;
  client: any;
  TipoPessoaCheckBox:TipoPessoaCheckBox;
  loading:boolean;
  mostrar:boolean;
  datatableMontado:any[] = [];

  //listDataTable:AprovacaoCadastral[];
  descriptionPesquisa:string;
  
  constructor(
    private modalService: NgbModal , 
    private serviceCustomer:CustomersServiceService ,
    private tokenService:TokenService
    ) {
      /*
      this.TipoPessoaCheckBox = {
        pessoaExportacao :true,
        pessoaJuridica:true,
        pessoaFisica:true
      }
    */

    this.getDataTableAprovacao();
    Object.assign(this, { client });
  }

  ngOnInit(): void { }

  /* 
  getConsultaAprovacao(){
    if(this.descriptionPesquisa != ""){
        let queryStringMontada:string = '';

        if(this.TipoPessoaCheckBox.pessoaFisica){
          queryStringMontada += '&EPessoaFisica=true';
        }
        
        if(this.TipoPessoaCheckBox.pessoaJuridica){
          queryStringMontada += '&EPessoaJuridica=true';
        }
    
        if(this.TipoPessoaCheckBox.pessoaExportacao){
          queryStringMontada += '&EPessoaEstrangeira=true';
        }
        
        console.log(queryStringMontada);
        const modelPesquisa:PesquisaAprovacaoModel = {
          numeroDoc:this.descriptionPesquisa,
          Nome:this.descriptionPesquisa,
          queryString:queryStringMontada
        };

        this.serviceCustomer.getListagemAprovacaoCliente(this.tokenService.retornaCabecalhoRequestGlobal(),modelPesquisa)
        .subscribe(r=>{
          console.log(r);
        },
        error=>{
          console.log(error);
        });
    }

  }
*/
  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? {} :
        this.clients.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  stopPropagation(e: Event) {
    e.stopPropagation();
  }

  openCustomerDetailsModal(e: Event) {
    e.stopImmediatePropagation();

    this.modalService.open(CustomerDetailModalComponent, { size: 'xl', centered: true, scrollable: true });
  }


  getDataTableAprovacao(){
    this.mostrar = false;
    this.loading = true;
    this.serviceCustomer.getListagemAprovacaoCliente(this.tokenService.retornaCabecalhoRequestGlobal())
    .subscribe( r => {
        r.result.data.map( result =>
          /* Agrupa array por aprovacoes */
           result.aprovacao.map(
            apr => {
              let date = new Date(apr.data);
                let obj = {
                    id:apr.id,
                    pessoaID:result.id,
                    data:`${ date.getDate() } / ${ date.getMonth() + 1 } / ${ date.getFullYear() }`,
                    usuario:apr.usuario,
                    tipo:apr.tipo,
                    status:apr.status,
                    numeroDoc:result.numeroDocumento,
                    nomeEmpresa:result.nome,
                    tipoPessoa:result.tipoPessoa,
                    pais:result.pais
                  }
                  this.datatableMontado.push(obj);
            })  
           );
      //console.log(r);
      //this.listDataTable = r.result.data;
      this.mostrar = true;
      this.loading = false;
    },error=>{
      this.mostrar = true;
      this.loading = false;
      console.log(error);
    });
  }


  AprovarCliente(pessoaID , idAprovacao) {
    //Prepara model
    let modeloAprovar:AproveReproveClienteModel = {
       Id:idAprovacao,
       PessoaId:pessoaID,
       /* Branco ou nulo é considerado como aprovado */
       MotivoReprovacao:null,
       Excluido:false,
       Ativo:true
    };
    //alert(`Pessoa ID : ${pessoaID} e aprovacao ID : ${idAprovacao}`);
    this.serviceCustomer.ApproveReproveCliente(this.tokenService.retornaCabecalhoRequestGlobal(),modeloAprovar)
    .subscribe( response => {
      this.getDataTableAprovacao();
    },
    error => {
      alert(`Ocorreu um erro ${ error }`)
    });

  }



  
  ReprovarCliente(pessoaID , idAprovacao , comentario) {
    //alert(`Pessoa ID : ${pessoaID} e aprovacao ID : ${idAprovacao}`);

    let modeloAprovar:AproveReproveClienteModel = {
      Id:idAprovacao,
      PessoaId:pessoaID,
      /* Com dado preenchido é considerado como reprovado */
      MotivoReprovacao:'aa',
      Excluido:false,
      Ativo:true
   };

   //alert(`Pessoa ID : ${pessoaID} e aprovacao ID : ${idAprovacao}`);
   this.serviceCustomer.ApproveReproveCliente(this.tokenService.retornaCabecalhoRequestGlobal(),modeloAprovar)
   .subscribe( response => {
     this.getDataTableAprovacao();
   },
   error => {
     alert(`Ocorreu um erro ${ error }`)
   });

  }



}
