import {FornecedorConversao} from './model/fornecedorConversao';
import {Fornecedor} from './model/fornecedor';
import {PessoaFisica} from './model/PessoaFisica';

import {parse} from 'papaparse';
import {createReadStream} from 'fs';

const file = createReadStream('./data/fornecedor2.csv');
var registros = 0;

parse(file, {
  worker: true,
  header: true,
  step: (row) => {
    console.log("cdFornecedor: " + row.data.cdFornecedor + " nmFornecedor: " + row.data.nmFornecedor);
    // var pessoa;
    // if(row.inPessoaFisicaJuridica == '1'){
    //   pessoa = new PessoaFisica("11111111111", "PESSOAFISICA");
    // }
    // fornecedor = new FornecedorConversao("224242", new Fornecedor(pessoa, 'N'));
    // console.log(fornecedor.fornecedor.informacaoContribuinte);
    registros++;
  },
  complete: () =>
    console.log("Terminou com "+registros+" recuperados")
  
});