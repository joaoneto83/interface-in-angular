import { Produto } from '../model/Produto';


/* Tipo Parametro Create Produtos  */
export type CreateProdutosCommand =  Omit<Produto , 
                                                "Id" |
                                                "DataInclusao" | 
                                                "UsuarioInclusaoId" |
                                                "DataUltimaAtualizacao" |
                                                "UsuarioUltimaAtualizacaoId" |
                                                "Excluido" |
                                                "DataExcluido" |
                                                "UsuarioExcluidoId">;


/* Tipo Parametro Update Produtos  */
export type UpdateProdutosCommand =  Omit<Produto , 
                                                "DataInclusao" | 
                                                "UsuarioInclusaoId" |
                                                "DataUltimaAtualizacao" |
                                                "UsuarioUltimaAtualizacaoId" |
                                                "DataExcluido" |
                                                "UsuarioExcluidoId">;

