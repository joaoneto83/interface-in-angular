import { RepresentanteAssistente } from './RepresentanteAssistente';
import { Pessoa } from './pessoa';
import { BaseModel } from './BaseModel';
import { EstruturaLinha } from './estruturaLinha';

export class Assistente extends BaseModel {
    PessoaId:Number;
    DataInicioVigencia:String;
    DataFimVigencia:String;
    CodAssistenteErp:String;
    VinculoEmpregaticio:Boolean;
    EstruturaLinhaId:Number;
    Pessoa:Pessoa;
    RepresentanteAssistente:RepresentanteAssistente[];
    EstruturaLinha:EstruturaLinha;
}