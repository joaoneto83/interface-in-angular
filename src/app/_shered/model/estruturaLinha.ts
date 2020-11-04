 import { AreaNegocio } from './areaNegocio';


export interface EstruturaLinha {
  AreaNegocioId: number;
  Descricao: string;
  LiberadoVenda: boolean;
  Imagem: string;
  CodigoErp: string;
  AreaNegocio: AreaNegocio[];
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