import { TokenService } from 'src/app/_core/services/token.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { CustomerDetailModalComponent } from '../customer-detail-modal/customer-detail-modal.component';
import { CustomersServiceService } from '../customers-service.service';



export class searchParameters{
  Nome:string;
  CodERP:string;
  NumDoc:string;
}


@Component({
  selector: 'elgin-query-customer',
  templateUrl: './query-customer.component.html',
  styleUrls: ['./query-customer.component.scss']
})
export class QueryCustomerComponent implements OnInit {

  modelPesquisa:searchParameters;

  infoBuscar:string = `<b>Senha Atual</b> <br/> 
  busca pode ser por nome ou documento e ....
   `;

  clients = ['1215151515000198', '2215151515000198'];

  constructor(private modalService: NgbModal , private queryService:CustomersServiceService , private tokenService:TokenService) { }

  ngOnInit(): void { }

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

  pesquisaCliente(){
      console.log(this.searchCmp);
      this.modelPesquisa = {
        Nome : this.searchCmp,
        CodERP : this.searchCmp,
        NumDoc : this.searchCmp
      }
      
      this.queryService
      .getConsutaCliente(this.tokenService.retornaCabecalhoRequestGlobal(),this.modelPesquisa).subscribe(
        response => console.log(response),
        error => console.log(error)
      );  
  }

}
