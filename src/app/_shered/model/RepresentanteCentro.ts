import { BaseModel } from './BaseModel';
import { Centro } from './Centro';
import { Representante } from './Representante';

export class RepresentanteCentro  extends BaseModel {

    RepresentanteId:Number;
    CentroId:Number;
    Representante:Representante;
    Centro:Centro;
    
}