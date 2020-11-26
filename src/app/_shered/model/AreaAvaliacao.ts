import { BaseModel } from './BaseModel';
import { Empresa } from './Empresa';

export class AreaAvaliacao extends BaseModel {

    CodigoErp:String;
    EmpresaId:Number;
    Empresa:Empresa;

}