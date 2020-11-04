import { AreaNegocioOrganizacaoVenda } from './areaNegocioOrganizacaoVenda';
import { GrupoAreaNegocio } from './grupoAreaNegocio';
import {SegmentoAreaNegocio}from './segmentoAreaNegocio';

export interface AreaNegocio {
  GrupoAreaNegocioId: number;
  Descricao: string;
  GrupoAreaNegocio: GrupoAreaNegocio[];
  AreaNegocioOrganizacaoVenda: AreaNegocioOrganizacaoVenda[];
  SegmentoAreaNegocio: SegmentoAreaNegocio[];
  Id: number;
  DataInclusao: string;
  UsuarioInclusaoId: number;
  DataUltimaAtualizacao: string;
  UsuarioUltimaAtualizacaoId: number;
  Ativo: boolean;
  Excluido: boolean;
  DataExcluido: string;
  UsuarioExcluidoId: number;
}; 