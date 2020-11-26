import { BaseModel } from './BaseModel';
import { TipoEmail } from './tipoEmail';


export interface Email extends BaseModel {

  TipoEmailId: number;
  PessoaId: number;
  Descricao: string;
  CodigoEmailErp: string;
  TipoEmail:TipoEmail;
    
}; 