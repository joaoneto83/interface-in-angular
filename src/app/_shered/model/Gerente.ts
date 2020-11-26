import { AreaNegocio } from './areaNegocio';
import { BaseModel } from './BaseModel';
import { Canal } from './Canal';
import { Pessoa } from './pessoa';

export class Gerente extends BaseModel {
    
    PessoaId:Number;
    AreaNegocioId:Number;
    DataInicioVigencia:String;
    DataFimVigencia:String;
    CodGerenteErp:String;
    CanalId:Number;
    VinculoEmpregaticio:Boolean;
    Pessoa:Pessoa;
    AreaNegocio:AreaNegocio
    Canal:Canal;
    
}