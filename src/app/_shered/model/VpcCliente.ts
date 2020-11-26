import { BaseModel } from './BaseModel';
import {AreaNegocio} from './areaNegocio';
import  {VpcClienteContrato} from './vpcClienteContrato';

export interface VpcCliente extends BaseModel {

  ClienteId: number;
  AreaNegocioId: number;
  RaizCNPJ: string;
  AreaNegocio: AreaNegocio;
  VpcClienteContrato: VpcClienteContrato[];
  
}; 