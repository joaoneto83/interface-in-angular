import { BaseModel } from './BaseModel';
import { AreaNegocioOrganizacaoVenda } from './areaNegocioOrganizacaoVenda';
import { GrupoAreaNegocio } from './grupoAreaNegocio';
import {SegmentoAreaNegocio}from './segmentoAreaNegocio';

export interface AreaNegocio extends BaseModel {

  GrupoAreaNegocioId: number;
  Descricao: string;
  GrupoAreaNegocio: GrupoAreaNegocio;
  AreaNegocioOrganizacaoVenda: AreaNegocioOrganizacaoVenda[];
  SegmentoAreaNegocio: SegmentoAreaNegocio[];
  
}; 