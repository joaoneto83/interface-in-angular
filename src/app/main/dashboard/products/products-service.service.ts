import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.hmg';
import { Produto } from 'src/app/_shered/model/Produto';
import { RetornoDataModel } from 'src/app/_shered/model/RetornoDataModel';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductsServiceService {

  constructor(private HttpClient:HttpClient ) { }

  getProdutosByID(cabecalho,id:Number):Observable<RetornoDataModel<Produto>>{
    return this.HttpClient.get(`${ environment.PORTAL_API }/Produtos/${id}`, cabecalho).pipe(
     map(response => Object.assign(new RetornoDataModel<Produto>() , response ))
    );
  }

  getProdutoFromBody(cabecalho , pessoaModel:any):Observable<RetornoDataModel<Produto[]>>{
    return this.HttpClient.get(`${ environment.PORTAL_API }/Produtos`,cabecalho ).pipe(
      map(response => Object.assign(new RetornoDataModel<Produto[]>(),response))
    );
  }

  PostProduto(cabecalho, CreateCommandProduto:any){
    return this.HttpClient.post(`${ environment.PORTAL_API }/Produtos`, CreateCommandProduto , cabecalho).pipe(
        map(response => Object.assign(new RetornoDataModel<Produto>() , response))
    );
  }
  PutProduto(cabecalho){
    return this.HttpClient.put(`${ environment.PORTAL_API }/Produtos`,cabecalho).pipe(
      map(response => Object.assign(new RetornoDataModel<Produto>(),response))
    );
  }

  DeleteProduto(cabecalho){
    return this.HttpClient.delete(`${ environment.PORTAL_API }/Produtos`,cabecalho).pipe(
      map(response => Object.assign(new RetornoDataModel<Produto>() ,  response))
    )
  }

  AtivaInativaProduto( cabecalho ){
    //return this.HttpClient.put(`${ environment.PORTAL_API }/Produtos/AtivaInativa`,ca)
  }



}
