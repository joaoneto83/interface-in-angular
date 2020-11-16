import { Cidades } from './cidades';

export interface Estado {
    Nome: string;
    Uf:string;
    Cidades:Cidades[];
    Id:number;
    DataInclusao:string;
    UsuarioInclusaoId:Number;
    DataUltimaAtualizacao:string;
    UsuarioUltimaAtualizacaoId:Number;
    Ativo:boolean;
    Excluido:boolean;
    DataExcluido:string;
    UsuarioExcluidoId:Number;
  }