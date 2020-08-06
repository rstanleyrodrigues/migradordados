import {Fornecedor} from './Fornecedor';
export class FornecedorConversao {
    idLegado: string;
    fornecedor: Fornecedor;

    FornecedorConversao (idLegado: string, fornecedor: Fornecedor){
        this.idLegado = idLegado;
        this.fornecedor = fornecedor;
    }
}