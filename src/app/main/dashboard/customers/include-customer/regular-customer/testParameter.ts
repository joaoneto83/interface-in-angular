import { ClienteEmpresa } from './../../../../../_shered/model/ClienteEmpresa';
import { Pessoa } from './../../../../../_shered/model/pessoa';
import { Clientes } from "src/app/_shered/model/Clientes";


/* Model envio clientes  */

export const ValorTest:Clientes = {
    PessoaId:null,
    CategoriaCfop:null,
    ContribuinteIcms:true ,
    TipoPrincipalSetorIndustrial:1,
    RegimeDeclaracaoPisCofins:1,
    Cnae:'123213123',
    /* Preechido pela consulta CNPJ - PODE OU NAO SER NULL */
    CodigoSuframa:'cod_suf',
    DataUltimaVerificacaoSuframa:null,
    StatusSuframa:false,
    Atributo1:'teste',
    VpcCliente:null,
    ClienteAreaNegocio:null,
    ClienteEmpresa:null,
    Id:null,
    DataInclusao:null,
    Ativo:null,
    UsuarioInclusaoId:null,
    DataExcluido:null,
    DataUltimaAtualizacao:null,
    Excluido:null,
    UsuarioExcluidoId:null,
    UsuarioUltimaAtualizacaoId:null,
    Pessoa:null

}