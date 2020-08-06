import { Pessoa } from "./Pessoa";
import { TipoPessoa } from "./TipoPessoa";

export class PessoaFisica extends Pessoa {

    nome: string;
    cpf: string;
    cboPessoaFisica: {
         id: any;
         codigoCBO: any;
         descricaoCBO: string;
         grupoCBO: {
                      id: any,
                      codigoGrupoCBO: any;
                      descricaoGrupoCBO: string;
                    }  
        };
    numeroContrIndividualINSS?: string;
    numeroPISPASEP?: string;  
    documentos: [];

    constructor (cpf: string, nome: string, 
        cboPessoaFisica?: any, 
        numeroContrIndividualINSS?: string, 
        numeroPISPASEP?: string,
        documentos?: any){

        super(TipoPessoa.PESSOA_FISICA);
        this.cboPessoaFisica = cboPessoaFisica;
        this.cpf = cpf;
        this.nome = nome;
        this.numeroContrIndividualINSS = numeroContrIndividualINSS;
        this.numeroPISPASEP = numeroPISPASEP;
        this.documentos = documentos;
    }
}