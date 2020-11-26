import { BaseModel } from './BaseModel';


export interface TipoDocumento extends BaseModel {
    Sigla: string;
    Descricao: string;
    Aplicacao: string;
}; 