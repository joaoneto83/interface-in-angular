import { BaseModel } from './BaseModel';
import { Cidades } from './cidades';
import { Pais } from './pais';
import { TipoEndereco } from './TipoEnderco';


export interface Enderecos extends BaseModel {

  PessoaId: number;
  TipoEnderecoid: number;
  CidadeId: number;
  PaisId: number;
  CodigoErp: string;
  Logradouro: string;
  Numero: string;
  Complemento: string;
  Bairro: string;
  CEP: string;
  CidadeExt: string;
  Principal: boolean;
  TipoEndereco:TipoEndereco;
  Cidade:Cidades;
  Pais:Pais;

}; 