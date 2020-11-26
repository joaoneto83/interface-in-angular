import { AreaNegocio } from './areaNegocio';
import { BaseModel } from './BaseModel';

export class Linha extends BaseModel{

    Descricao:String;
    AreaNegocioId:Number
    CodigoErp:String;
    LiberadoVenda:Boolean
    AreaNegocio:AreaNegocio;


}