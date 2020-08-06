import {Fornecedor} from './fornecedor';
import { FornecedorLegado } from './FornecedorLegado';
import { Pessoa } from './Pessoa';
import { PessoaFisica } from './PessoaFisica';
import { PessoaJuridica } from './PessoaJuridica';
export class FornecedorConversao {
    idLegado: string;
    fornecedor: Fornecedor;

    constructor (idLegado: string, fornecedor: Fornecedor){
        this.idLegado = idLegado;
        this.fornecedor = fornecedor;
    }

}

export function converteDeFornecedorLegado(legado: FornecedorLegado){


    let pessoa;
    if(legado.inPessoaFisicaJuridica == '1'){
        pessoa = new PessoaFisica(legado.nrCGCCPF, legado.nmFornecedor);

        pessoa.numeroContrIndividualINSS = legado.nrCIINSS;
        if(legado.cdCBO != '0'){
            pessoa.cboPessoaFisica.codigoCBO = legado.cdCBO;
            pessoa.cboPessoaFisica.grupoCBO.codigoGrupoCBO = legado.cdGrupoCBO;
        }
    }else {

        pessoa = new PessoaJuridica(legado.nrCGCCPF);
        pessoa.nomeFantasia = legado.nmFantasia;
        pessoa.razaoSocial = legado.nmFornecedor;
    }

    const fornecedor = new Fornecedor (pessoa, legado.inContribuinte);    
    if(legado.cdNaturezaCredito != '9999'){        
        fornecedor.naturezaCredito.codigoNaturezaCredito = legado.cdNaturezaCredito;
    }
    fornecedor.tipoFornecimento = legado.inTipoFornecimento;

    const fornecedorConv = new FornecedorConversao(legado.cdFornecedor,fornecedor);

    return fornecedorConv;

}