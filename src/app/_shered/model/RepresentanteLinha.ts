import { Representante } from './Representante';
import { BaseModel } from './BaseModel';
import { Linha } from './Linha';

export class RepresentanteLinha extends BaseModel {
    
    RepresentanteId	:Number;
    LinhaId	:Number;
    Representante:Representante;
    Linha:Linha;
       
}