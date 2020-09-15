
export interface Product {
    linha?: string;
    id?: number;
    cnpj?: string;
    produtosTipo?: ProdutosTipo[];
    produtos?: Produtos[];
}

export class Product {
    constructor(
        public linha?: string,
        public id?: number,
        public cnpj?: string,
        public produtosTipo?: ProdutosTipo[],
        public produtos?: Produtos[]
    ) { }
}

export interface ProdutosTipo {
    tipo?: string;
    thumbnail?: string;
    produtos?: Produtos[];
}

export class ProdutosTipo {
    constructor(
        public tipo?: string,
        public thumbnail?: string,
        public produtos?: Produtos[]
    ) { }
}

export interface Produtos {
    cod?: string;
    desc?: string;
    estoque?: string;
    prazo?: string;
    imagem?: string;
}

export class Produtos {
    constructor(
        public cod?: string,
        public desc?: string,
        public estoque?: string,
        public prazo?: string,
        public imagem?: string
    ) { }
}
