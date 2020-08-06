import {Fornecedor} from './fornecedor';
export class FornecedorConversao {
    idLegado: string;
    fornecedor: Fornecedor;

    constructor (idLegado: string, fornecedor: Fornecedor){
        this.idLegado = idLegado;
        this.fornecedor = fornecedor;
    }
}