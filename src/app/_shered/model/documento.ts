import { BaseModel } from './BaseModel';
import { TipoDocumento } from './tipoDocumento';


export interface Documento extends BaseModel {

  PessoaId: number;
  TipoDocumentoId: number;
  DescricaoDocumento: string;
  DataSituacao: string;
  DataValidade: string;
  DataEmissao: string;
  OrgaoEmissao: string;
  TipoDocumento: TipoDocumento;
    
}; 