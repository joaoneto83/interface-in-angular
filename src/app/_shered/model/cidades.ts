import { Estado } from './estado';
// import { Dependente } from './dependente';
// import { Arquivo } from '../../_models/Arquivo';

export interface Cidades {
  Nome: string;
  CidadeIncentivada: boolean;
  Estado:Estado
  Id: number;
  DataInclusao: string;
  UsuarioInclusaoId: number;
  DataUltimaAtualizacao: string;
  UsuarioUltimaAtualizacaoId: number;
  Ativo: boolean;
  Excluido: boolean;
  DataExcluido: string;
  UsuarioExcluidoId: number

}; 