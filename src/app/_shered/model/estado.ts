import { Cidades } from './cidades';

export interface Estado {
    Nome: string;
    CidadeIncentivada: boolean;
    Estado: {
      Uf: string;
      Nome: string;
      Cidades: Cidades[];
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
    Top: number;
    Skip: number;
    ContarRegistros: boolean;
    OrderBy: string;
    Ativo: boolean;
    Excluido: boolean;
    Includes: string
  }