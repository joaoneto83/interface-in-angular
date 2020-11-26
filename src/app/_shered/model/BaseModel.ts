/* 
    Model geral de auditoria de tabelas 
    Pedro Furlan 
    DATA CRIAÇÃO : 25/11/2020
*/
export class BaseModel {
    
    Id: number;
    DataInclusao: string;
    UsuarioInclusaoId: number;
    DataUltimaAtualizacao: string;
    UsuarioUltimaAtualizacaoId: number;
    Ativo: boolean;
    Excluido: boolean;
    DataExcluido: string;
    UsuarioExcluidoId: number;
}