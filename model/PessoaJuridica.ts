import {TipoPessoa} from './TipoPessoa'
import { Pessoa } from './Pessoa';

export class PessoaJuridica extends Pessoa{
    
    cnpj: string;
    inscricaoEstadual: string;
    inscricaoMunicipal: string;
    nomeFantasia: string;
    razaoSocial: string;
    porteEmpresa : {
        id: any;
        codigoPorteEmpresa: string;
        descricaoPorteEmpresa: string;
    };

    PessoaJuridica ( cnpj: string, 
        ){
        this.tipoPessoa = TipoPessoa.PESSOA_JURIDICA;
    }
}