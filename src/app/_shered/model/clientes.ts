import { BaseModel } from './BaseModel';
import { ClienteAreaNegocio } from './ClienteAreaNegocio';
import { ClienteEmpresa } from './ClienteEmpresa';
import { Pessoa } from './pessoa';
import { VpcCliente } from './VpcCliente';

export interface Clientes extends BaseModel {

    PessoaId: number;
    CategoriaCfop: number;
    ContribuinteIcms : boolean;
    TipoPrincipalSetorIndustrial: number;
    RegimeDeclaracaoPisCofins: number;
    Cnae: string;
    CodigoSuframa: string;
    DataUltimaVerificacaoSuframa:string;
    StatusSuframa: boolean;
    Atributo1: string;
    Pessoa: Pessoa;
    VpcCliente: VpcCliente;
    ClienteAreaNegocio:ClienteAreaNegocio[];
    ClienteEmpresa:ClienteEmpresa;
}; 