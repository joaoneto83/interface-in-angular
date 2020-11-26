import { BaseModel } from './BaseModel';
import { Cidades } from './cidades';

export interface Estado extends BaseModel {

    Nome: string;
    Uf:string;
    Cidades:Cidades[];
    
  }