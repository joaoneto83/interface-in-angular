export interface Store {
    filter?: string;
    stores?: [string];
}

export class Store implements Store {
    constructor(
        public filter?: string,
        public stores?: [string]
    ) { }
}
