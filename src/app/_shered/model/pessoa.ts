  import { Enderecos } from './enderecos';
  import { Telefone } from './telefone';
  import { Email } from './email';
  import { Documento } from './documento';
  import { Clientes } from './Clientes';
  import { AlteracaoCadastralCliente } from './alteracaoCadastralCliente';
  import { TipoPessoa } from './tipoPessoa';

export interface Pessoa {
  
  guid: string;
  codigoERP: string;
  numeroDocumento: string;
  nome: string;
  tipoPessoaId: number;
  tipoParceiro: string;
  intercompany: boolean;
  restricaoFinanceira: boolean;
  tipoPessoa: TipoPessoa;
  endereco: Enderecos[];
  telefone: Telefone[]; 
  email: Email[];
  documento: Documento[];
  cliente: Clientes[];
  alteracaoCadastralCliente: AlteracaoCadastralCliente[]; 
  id: number;
  DataInclusao: string;
  UsuarioInclusaoId: number;
  DataUltimaAtualizacao: string;
  UsuarioUltimaAtualizacaoId: number;
  ativo: boolean;
  Excluido: boolean;
  DataExcluido: string;
  UsuarioExcluidoId: number;

}; 