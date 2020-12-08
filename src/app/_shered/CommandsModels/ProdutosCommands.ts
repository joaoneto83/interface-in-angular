import { Produto } from '../model/Produto';

export type CreateProdutosCommand =  Omit<Produto , 
                                                "Id" |
                                                "DataInclusao" | 
                                                "UsuarioInclusaoId" |
                                                "DataUltimaAtualizacao" |
                                                "UsuarioUltimaAtualizacaoId" |
                                                "Excluido" |
                                                "DataExcluido" |
                                                "UsuarioExcluidoId">;

                                                

export type UpdateProdutosCommand =  Omit<Produto , 
                                                "DataInclusao" | 
                                                "UsuarioInclusaoId" |
                                                "DataUltimaAtualizacao" |
                                                "UsuarioUltimaAtualizacaoId" |
                                                "DataExcluido" |
                                                "UsuarioExcluidoId">;

