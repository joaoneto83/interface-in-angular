import { BaseModel } from './BaseModel';

import {EstruturaLinha}from './estruturaLinha';

export interface VpcClienteContrato extends BaseModel {
  
  VpcClienteId: number;
  EstruturaLinhaId: number;
  PercentualContrato: number;
  PercentualProvisaoDiretoria: number;
  PercentualProvisaoComercial: number;
  EmpresaCod: string;
  EstruturaLinha: EstruturaLinha[];

}; 