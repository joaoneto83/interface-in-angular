import { AreaNegocio } from './areaNegocio';
import { BaseModel } from './BaseModel';

export class Canal extends BaseModel {

    Codigo:Number;
    Descricao:String;
    CodigoErp:String;    
    AreaNegocioId:Number;
    AreaNegocio:AreaNegocio;
    
}