

export interface TipoTelefone {
  
  Descricao: string;
  Sigla: string;
  Id: number;
  DataInclusao: string,
  UsuarioInclusaoId: number;
  DataUltimaAtualizacao: string,
  UsuarioUltimaAtualizacaoId: number;
  Ativo: boolean;
  Excluido: boolean;
  DataExcluido: string,
  UsuarioExcluidoId: number;
}; 