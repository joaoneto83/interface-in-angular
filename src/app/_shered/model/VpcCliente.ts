import {AreaNegocio} from './areaNegocio';
import  {VpcClienteContrato} from './vpcClienteContrato';

export interface VpcCliente {

  ClienteId: number;
  AreaNegocioId: number;
  RaizCNPJ: string;
  AreaNegocio: AreaNegocio [];
  VpcClienteContrato: VpcClienteContrato[];
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