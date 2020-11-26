import { AreaNegocio } from './areaNegocio';
import { Representante } from './Representante';
import { BaseModel } from './BaseModel';
import { Assistente } from './Assistente';

export class RepresentanteAssistente  extends BaseModel {

    RepresentanteId:Number;
    AssistenteId:Number;
    AreaNegocioId:Number;
    Representante:Representante;
    Assistente:Assistente;
    AreaNegocio:AreaNegocio;

}