import { Representante } from './Representante';
import { AreaNegocio } from './areaNegocio';
import { BaseModel } from './BaseModel';

export class ClienteAreaNegocio extends BaseModel {
    ClienteId:Number;
    AreaNegocioId:Number;
    RepresentanteId:Number;
    DataUltimoFaturamento:String;
    AreaNegocio:AreaNegocio;
    Representante:Representante;
    
}