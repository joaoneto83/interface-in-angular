import { BaseModel } from './BaseModel';


export interface AreaNegocioOrganizacaoVenda  extends BaseModel{

  AreaNegocioId: number;
  OrganizacaoVenda: string;
  CanalDistribuicao: string;

}; 