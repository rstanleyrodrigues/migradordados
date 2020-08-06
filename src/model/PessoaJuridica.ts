import {TipoPessoa} from './TipoPessoa'
import { Pessoa } from './Pessoa';

export class PessoaJuridica extends Pessoa{
    
    cnpj: string;
    inscricaoEstadual?: string;
    inscricaoMunicipal?: string;
    nomeFantasia?: string;
    razaoSocial?: string;
    porteEmpresa?: {
        id: any;
        codigoPorteEmpresa: string;
        descricaoPorteEmpresa: string;
    };

    constructor ( cnpj: string, razaoSocial?: string, nomeFantasia?: string, inscricaoMunicipal?: string, inscricaoEstadual?: string,
         porteEmpresa?: any){
        super(TipoPessoa.PESSOA_JURIDICA);
        this.cnpj = cnpj;
        this.inscricaoEstadual = inscricaoEstadual;
        this.inscricaoMunicipal = inscricaoMunicipal;
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.porteEmpresa = porteEmpresa;
    }
}