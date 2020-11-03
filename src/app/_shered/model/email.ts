import { TipoEmail } from './tipoEmail';


export interface Email {

  TipoEmailId: number;
  PessoaId: number;
  Descricao: string;
  CodigoEnderecoErp: string;
  TipoEmail:TipoEmail[];
  Id: number;
  DataInclusao: string;
  UsuarioInclusaoId: number;
  DataUltimaAtualizacao: string ;
  UsuarioUltimaAtualizacaoId: number;
  Ativo: boolean;
  Excluido: boolean;
  DataExcluido: string;
  UsuarioExcluidoId: number;
    
}; 