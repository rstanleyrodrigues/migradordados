import { Pessoa } from "./Pessoa";

export class Fornecedor {
    id: string;
    pessoaFornecedor: Pessoa;
    informacaoContribuinte?: string;
    naturezaCredito: {
        id: any;
        codigoNaturezaCredito: any;
        descricaoNaturezaCredito: string;        
    };
    tipoFornecimento?: string;

    constructor (pessoaFornecedor: Pessoa, informacaoContribuinte?: string,
        naturezaCredito?: any, id?: any, tipoFornecimento?: string){

            this.id = id;
            this.informacaoContribuinte = informacaoContribuinte;
            this.naturezaCredito = naturezaCredito;
            this.pessoaFornecedor = pessoaFornecedor;
            this.tipoFornecimento = tipoFornecimento;

    }
}