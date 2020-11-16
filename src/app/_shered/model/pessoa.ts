  import { Enderecos } from './enderecos';
  import { Telefone } from './telefone';
  import { Email } from './email';
  import { Documento } from './documento';
  import { Clientes } from './Clientes';
  import { AlteracaoCadastralCliente } from './alteracaoCadastralCliente';
  import { TipoPessoa } from './tipoPessoa';

export interface Pessoa {
  
  Guid: string;
  CodigoERP: string;
  NumeroDocumento: string;
  Nome: string;
  TipoPessoaId: number;
  TipoParceiro: string;
  Intercompany: boolean;
  RestricaoFinanceira: boolean;
  TipoPessoa: TipoPessoa;
  endereco: Enderecos[];
  Telefone: Telefone[]; 
  Email: Email[];
  Documento: Documento[];
  Cliente: Clientes[];
  AlteracaoCadastralCliente: AlteracaoCadastralCliente[]; 
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