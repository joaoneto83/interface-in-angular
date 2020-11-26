import { BaseModel } from './BaseModel';

export interface  AlteracaoCadastralCliente extends BaseModel {

  PessoaId: number;
  ComentarioCorrecao: string;
  DataSolicitacao: string;
  DataConclusao: string;
  MotivoReprovacao: string;
  Status: number;

}; 