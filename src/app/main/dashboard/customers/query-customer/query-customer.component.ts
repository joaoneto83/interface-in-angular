import { Pessoa } from './../../../../_shered/model/pessoa';
import { TokenService } from 'src/app/_core/services/token.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, repeat } from 'rxjs/operators';
import { CustomerDetailModalComponent } from '../customer-detail-modal/customer-detail-modal.component';
import { CustomersServiceService } from '../customers-service.service';
import { RetornoDataModel } from 'src/app/_shered/model/RetornoDataModel';


/* 
export class searchParameters{
  Nome:string;
  CodERP:string;
  NumDoc:string;
}
*/

@Component({
  selector: 'elgin-query-customer',
  templateUrl: './query-customer.component.html',
  styleUrls: ['./query-customer.component.scss']
})
export class QueryCustomerComponent implements OnInit {

  //modelPesquisa:searchParameters;
  loading:boolean;
  show:boolean;
  dataPesquisa: RetornoDataModel<Pessoa[]>;
  
  infoBuscar:string = `<b>Senha Atual</b> <br/> 
  busca pode ser por nome ou documento e ....
   `;
   pesquisar:boolean;
   infoPesquisa:string = `
   Pesquisa não encontra.
    `;
     

  clients = ['1215151515000198', '2215151515000198'];

  constructor(private modalService: NgbModal , private queryService:CustomersServiceService , private tokenService:TokenService) {
    this.loading = false;
    this.show = false;
    this.pesquisar = false;
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
    }
  }
  sempesquisar(){
    this.pesquisar = true;
  }

  pesquisaCliente(){
  
    this.loading = true;

    if(this.searchCmp != ""){
      

      this.getResultConsultaCliente(`Nome=${this.searchCmp}`);
         this.mostrar();
      
      setTimeout(()=>{

        if(this.dataPesquisa.result.data.length == 0){
        
            this.getResultConsultaCliente(`CodigoERP=${this.searchCmp}`);
            this.mostrar();
        }
      },1000);
      
      setTimeout(()=>{
        if(this.dataPesquisa.result.data.length == 0){
          
            this.getResultConsultaCliente(`NumeroDocumento=${this.searchCmp}`);
            this.mostrar();
            
        }
        if(this.dataPesquisa.result.data.length == 0){

          this.sempesquisar();
          
      }
        
      },2000);
    }else{
      
      this.dataPesquisa.result.data = [];
    }
     
  }



  getResultConsultaCliente(queryString:string){
    this.queryService
    .getConsutaCliente(this.tokenService.retornaCabecalhoRequestGlobal(),queryString).subscribe(
      response => {
        this.dataPesquisa = response;
      },
      error => console.log(error)
    ); 
  }

}
