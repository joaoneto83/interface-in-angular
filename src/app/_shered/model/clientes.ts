import { Pessoa } from './pessoa';
import { VpcCliente } from './VpcClientes';

export interface Clientes {

    PessoaId: number;
    CategoriaCfop: number;
    ContribuinteIcms : boolean;
    TipoPrincipalSetorIndustrial: number;
    RegimeDeclaracaoPisCofins: number;
    Cnae: string;
    CodigoSuframa: string;
    DataUltimaVerificacaoSuframa: string;
    StatusSuframa: boolean;
    Atributo1: string;
    Pessoa: Pessoa[];
    VpcCliente: VpcCliente[];
    UsuarioInclusaoId: number;
    Ativo: boolean;
    Excluido: boolean;
    
}; 