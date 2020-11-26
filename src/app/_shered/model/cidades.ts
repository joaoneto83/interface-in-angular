import { BaseModel } from './BaseModel';
import { Estado } from './estado';
// import { Dependente } from './dependente';
// import { Arquivo } from '../../_models/Arquivo';

export interface Cidades extends BaseModel {

  Nome: string;
  CidadeIncentivada: boolean;
  Estado:Estado;
  
}; 