import { TipoDocumento } from './tipoDocumento';


export interface Documento {
  PessoaId: number;
  TipoDocumentoId: number;
  DescricaoDocumento: string;
  DataSituacao: string;
  DataValidade: string;
  DataEmissao: string;
  OrgaoEmissao: string;
  TipoDocumento: TipoDocumento[];
  Id: number;
  DataInclusao: string;
  UsuarioInclusaoId: number;
  DataUltimaAtualizacao: string;
  UsuarioUltimaAtualizacaoId: number;
  Ativo: true;
  Excluido: true;
  DataExcluido: string;
  UsuarioExcluidoId: number
    
}; 