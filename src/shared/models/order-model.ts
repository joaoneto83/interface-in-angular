export interface Order {
    data?: string;
    cliente?: string;
    cnpj?: string;
    representate?: string;
    area?: string;
    canal?: string;
    up?: number;
    pedido?: any[];
    notaFiscal?: string;
    nfQtd?: number;
    valor?: number;
    status?: string;
}

export class Order {
    constructor(
        public data?: string,
        public cliente?: string,
        public cnpj?: string,
        public representate?: string,
        public area?: string,
        public canal?: string,
        public up?: number,
        public pedido?: any[],
        public notaFiscal?: string,
        public nfQtd?: number,
        public valor?: number,
        public status?: string
    ) { }
}
