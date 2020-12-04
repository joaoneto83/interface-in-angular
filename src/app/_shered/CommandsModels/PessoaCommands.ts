import { Clientes } from '../model/Clientes';
import { Documento } from '../model/documento';
import { Email } from '../model/email';
import { Enderecos } from '../model/enderecos';
import { Pessoa } from '../model/pessoa';
import { Telefone } from '../model/telefone';

export class PessoaCommands {

    /* Monta um objeto do tipo Create pessoa command  */
    CreatePessoaCommand(){

        type CreatePessoaCommand = Pick<Pessoa, 
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
                            "DataUltimaVerificacaoSuframa" |
                            "StatusSuframa" | 
                            "Atributo1" |
                            "Ativo">[]
                }

        let post_pessoa:CreatePessoaCommand;

        return post_pessoa;                         
    }


}