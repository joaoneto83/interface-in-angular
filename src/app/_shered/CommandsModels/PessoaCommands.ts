import { Clientes } from '../model/Clientes';
import { Documento } from '../model/documento';
import { Email } from '../model/email';
import { Enderecos } from '../model/enderecos';
import { Pessoa } from '../model/pessoa';
import { Telefone } from '../model/telefone';


/* Tipo Parametro Create Pessoa  */
export type CreatePessoaCommand = Pick<Pessoa, 
        "numeroDocumento" |
        "nome" | 
        "tipoPessoaId" | 
        "intercompany" | 
        "restricaoFinanceira" | 
        "Ativo"> & 
        {
        endereco:Pick<Enderecos,
                    "TipoEnderecoid" |
                    "CidadeId" |
                    "Logradouro"|
                    "Numero" | 
                    "Complemento" |
                    "Bairro" |
                    "CEP" |
                    "CidadeExt" |
                    "Principal" |
                    "PaisId" |
                    "Ativo">[]
        } & 
        {
        telefone:Pick<Telefone ,
                    "TipoTelefoneId" | 
                    "Descricao" |
                    "Ativo" >[]

        }&
        { 
        email:Pick<Email, 
                    "TipoEmailId" | 
                    "Descricao" |
                    "Ativo">[]
        }&
        {
        documento:Pick<Documento ,
                        "TipoDocumentoId" |
                        "DescricaoDocumento" |
                        "DataSituacao" |
                        "DataValidade" |
                        "DataEmissao" |
                        "OrgaoEmissao" |
                        "Ativo">[]
        }&
        {
        cliente:Pick<Clientes,
                    "CodigoSuframa" |
                    "Cnae" |
                    "DataUltimaVerificacaoSuframa" |
                    "StatusSuframa" | 
                    "Atributo1" |
                    "Ativo">[]
        }


