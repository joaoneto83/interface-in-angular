import { Pessoa } from './../../../../_shered/model/pessoa';
import { TokenService } from 'src/app/_core/services/token.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, repeat } from 'rxjs/operators';
import { CustomerDetailModalComponent } from '../customer-detail-modal/customer-detail-modal.component';
import { CustomersServiceService } from '../customers-service.service';
import { RetornoDataModel } from 'src/app/_shered/model/RetornoDataModel';
import { TipoPessoaCheckBox } from 'src/app/_shered/model/TipoPessoaCheckBox';



export class searchParameters{
  Nome:string;
  CodERP:string;
  NumDoc:string;
  QueryTipoPessoa:string;
}


@Component({
  selector: 'elgin-query-customer',
  templateUrl: './query-customer.component.html',
  styleUrls: ['./query-customer.component.scss']
})
export class QueryCustomerComponent implements OnInit {

  modelPesquisa:searchParameters;
  loading:boolean;
  show:boolean;
  dataPesquisa:RetornoDataModel<Pessoa[]>;

  checkBoxTipoPessoa:TipoPessoaCheckBox;

  infoBuscar:string = `<b>Senha Atual</b> <br/> 
  busca pode ser por nome ou documento e ....
   `;

   pesquisar:boolean;
   infoPesquisa:string = `
   Pesquisa não encontrada.
    `;
     

  clients = ['1215151515000198', '2215151515000198'];

  constructor(private modalService: NgbModal , private queryService:CustomersServiceService , private tokenService:TokenService) {
    this.loading = false;
    this.show = false;
    this.pesquisar = false;

    this.checkBoxTipoPessoa = {
      pessoaFisica:true,
      pessoaExportacao:true,
      pessoaJuridica:true
    }
   }

  ngOnInit(): void { }
  teste:string = 'asadasdads'; 
  searchCmp:string;

  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? {} :
        this.clients.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  openCustomerDetailModal() {
    this.modalService.open(CustomerDetailModalComponent, { size: 'xl', centered: true, scrollable: true });
  }
  mostrar()
  {
    if(this.dataPesquisa.result.data.length != 0){
      this.show = true;
      this.loading = false;
      this.pesquisar = false;
    }
  }
  sempesquisar(){
    this.show = false;
    this.pesquisar = true;
  }

  pesquisaCliente(){
  
    if(this.searchCmp != ""){
      let queryStringCompleta = ''

      if(this.checkBoxTipoPessoa.pessoaFisica){
        queryStringCompleta += '&EPessoaFisica=true';
      }
      
      if(this.checkBoxTipoPessoa.pessoaJuridica){
        queryStringCompleta += '&EPessoaJuridica=true';
      }

      if(this.checkBoxTipoPessoa.pessoaExportacao){
        queryStringCompleta += '&EPessoaEstrangeira=true';
      }

      console.log(queryStringCompleta);
      
        this.modelPesquisa = {
          CodERP: this.searchCmp,
          Nome:this.searchCmp,
          NumDoc:this.searchCmp,
          QueryTipoPessoa:queryStringCompleta
        }

        this.getResultConsultaCliente(this.modelPesquisa);
    }
     else {
      
      this.dataPesquisa.result.data = [];
    }
     
  }



  getResultConsultaCliente(modeloPesquisa:searchParameters){
    this.loading = true;
    this.queryService
    .getConsutaCliente(this.tokenService.retornaCabecalhoRequestGlobal(),modeloPesquisa).subscribe(
      response => {
        this.loading = false;
        console.log(response);
          this.dataPesquisa = response;
          if(response.result.data.length > 0){
            this.mostrar();
            this.pesquisar = false;
          }
          else {
            this.sempesquisar();
          }
          
        },
      error => console.log(error)
    ); 
  }

}
