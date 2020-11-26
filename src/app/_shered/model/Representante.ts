import { EstruturaLinha } from './estruturaLinha';
import { Pessoa } from './pessoa';
import { BaseModel } from './BaseModel';
import { RepresentanteCanal } from './RepresentanteCanal';
import { RepresentanteLinha } from './RepresentanteLinha';
import { RepresentanteCentro } from './RepresentanteCentro';
import { RepresentanteAssistente } from './RepresentanteAssistente';

export class Representante extends BaseModel {

    PessoaId:Number;
    DataInicioVigencia:String;
    DataFimVigencia:String;
    CodRepresentanteErp:String;
    VinculoEmpregaticio:Boolean;
    EstruturaLinhaId:Number;
    Pessoa:Pessoa;
    RepresentanteCanal:RepresentanteCanal[];
    EstruturaLinha:EstruturaLinha;
    RepresentanteLinha:RepresentanteLinha[];
    RepresentanteCentro:RepresentanteCentro[];
    RepresentanteAssistente:RepresentanteAssistente[];
    
}