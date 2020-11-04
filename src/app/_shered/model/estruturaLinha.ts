 import { AreaNegocio } from './areaNegocio';


export interface EstruturaLinha {
  AreaNegocioId: number;
  Descricao: string;
  LiberadoVenda: true;
  Imagem: string;
  CodigoErp: string;
  AreaNegocio: AreaNegocio[];
  Id: number;
  DataInclusao: string;
  UsuarioInclusaoId: number;
  DataUltimaAtualizacao: string;
  UsuarioUltimaAtualizacaoId: number;
  Ativo: true;
  Excluido: true;
  DataExcluido: string;
  UsuarioExcluidoId: number;


}; 