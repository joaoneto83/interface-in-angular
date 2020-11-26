import { BaseModel } from './BaseModel';
import { Pessoa } from './pessoa';
import { TipoTelefone } from './TipoTelefone';

export interface Telefone extends BaseModel {

 TipoTelefoneId: number;
 PessoaId: number;
 Descricao: string;
 CodigoEnderecoErp: string;
 Pessoa:Pessoa;
 TipoTelefone: TipoTelefone;
    
}; 