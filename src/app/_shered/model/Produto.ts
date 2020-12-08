import { BaseModel } from './BaseModel';

export class Produto extends BaseModel {
    Codigo:String;
    Descricao:String;
    UnidadeMedida:String;
    CodigoBarraEAN:String;
    TipoEAN:String;
    SetorAtividade:Number;
    PesoBruto	:Number;
    PesoLiquido	:Number;
    DescricaoNF:String;
    UnidadePeso	:Number;
    Volume	:Number;
    UnidadeVolume:String;
    StatusMaterialTodosCentro:String;
    TipoMaterial:String;
    ImagemProduto:String;
}