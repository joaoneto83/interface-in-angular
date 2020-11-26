import { BaseModel } from './BaseModel';
 import { AreaNegocio } from './areaNegocio';


export interface EstruturaLinha extends BaseModel {
  AreaNegocioId: number;
  Descricao: string;
  LiberadoVenda: boolean;
  Imagem: string;
  CodigoErp: string;
  AreaNegocio: AreaNegocio[];
}; 