import { BaseModel } from './BaseModel';

export interface SegmentoAreaNegocio extends BaseModel {

  AreaNegocioId: number;
  SegmentoId: number;
  Descricao: string;
  LiberadoVenda: boolean;

} 