import {TipoPessoa} from './TipoPessoa'

export class Pessoa {
    id: any;
    tipoPessoa: TipoPessoa;
    emails = [];
    endereco = [];
    listaTelefone = [];

    constructor (tipoPessoa: TipoPessoa){
        this.tipoPessoa = tipoPessoa;
    }
}