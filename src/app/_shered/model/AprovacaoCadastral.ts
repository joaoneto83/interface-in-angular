import { Usuario } from './usuario';
import { Pais } from './pais';
import { AreaNegocio } from './areaNegocio';

export class AprovacaoCadastral {
    id:number;
    numeroDocumento:string;
    nome:string;
    tipoPessoa:string;  
    areaNegocio:AreaNegocio[];
    pais:Pais;
    aprovacao:[{
        id:number;
        data:string;
        usuario:Usuario;
        tipo:string;
        status:string;
    }];
}