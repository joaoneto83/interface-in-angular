import { AreaNegocio } from './areaNegocio';
import { BaseModel } from './BaseModel';

export interface GrupoAreaNegocio extends BaseModel {
  Descricao: string;
  AreaNegocio : AreaNegocio[];
}; 