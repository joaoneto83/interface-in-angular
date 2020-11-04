import { Cidades } from './cidades';

export interface Estado {
    Nome: string;
    CidadeIncentivada: true;
    Estado: {
      Uf: string;
      Nome: string;
      Cidades: Cidades[];
      Id: number;
      DataInclusao: string;
      UsuarioInclusaoId: number;
      DataUltimaAtualizacao: string;
      UsuarioUltimaAtualizacaoId: number;
      Ativo: true;
      Excluido: true;
      DataExcluido: string;
      UsuarioExcluidoId: number
    };
    Top: number;
    Skip: number;
    ContarRegistros: true;
    OrderBy: string;
    Ativo: true;
    Excluido: true;
    Includes: string
  }