

export interface TipoDocumento {

    Sigla: string;
    Descricao: string;
    Aplicacao: string;
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