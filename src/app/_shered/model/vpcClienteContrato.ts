
import {EstruturaLinha}from './estruturaLinha';

export interface VpcClienteContrato {
 
  
  VpcClienteId: number;
  EstruturaLinhaId: number;
  PercentualContrato: number;
  PercentualProvisaoDiretoria: number;
  PercentualProvisaoComercial: number;
  EmpresaCod: string;
  EstruturaLinha: EstruturaLinha [];
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