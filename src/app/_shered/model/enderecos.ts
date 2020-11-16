import { Cidades } from './cidades';
import { Pais } from './pais';
import { TipoEndereco } from './TipoEnderco';


export interface Enderecos {

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
  Id: number;
  DataInclusao: string;
  UsuarioInclusaoId: number;
  DataUltimaAtualizacao: string;
  UsuarioUltimaAtualizacaoId: number;
  Ativo: boolean;
  Excluido: boolean;
  DataExcluido: string;
  UsuarioExcluidoId: number;
    
}; 