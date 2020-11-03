import { TipoTelefone } from './TipoTelefone';

export interface Telefone {

  
 TipoTelefoneId: number;
 PessoaId: number;
 Descricao: string;
 CodigoEnderecoErp: string;
 TipoTelefone: TipoTelefone[];
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