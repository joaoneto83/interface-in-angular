import { AreaAvaliacao } from './AreaAvaliacao';
import { BaseModel } from './BaseModel';
import { Cidades } from './cidades';
import { Estado } from './estado';

export class Centro extends BaseModel {

    CodigoSap:String;
    AreaAvaliacaoId	:Number;
    Descricao:String;
    RazaoSocial:String;
    Endereco:String;
    BairroCidade:String;
    CidadeUf:String;
    CodCidade:Number;
    CodEstado:Number;
    AreaAvaliacao:AreaAvaliacao;
    Cidade:Cidades;
    Estado:Estado;
    
}