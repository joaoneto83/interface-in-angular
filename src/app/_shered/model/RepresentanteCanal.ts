import { BaseModel } from './BaseModel';
import { Canal } from './Canal';
import { Gerente } from './Gerente';

export class RepresentanteCanal extends BaseModel {

    RepresentanteId:Number;
    CanalId	:Number;
    GerenteId:Number;
    Canal:Canal;
    Gerente:Gerente;
    
}