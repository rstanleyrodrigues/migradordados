import FornecedorConversao from './model/FornecedorConversao.ts';
import Fornecedor from './model/Fornecedor.ts';
import PessoaFisica from './model/PessoaFisica.ts';

import parse from 'papaparse';
import createReadStream from 'fs';

const file = createReadStream('./data/fornecedor2.csv');
var registros = 0;

parse(file, {
  worker: true,
  step: function (row) {
    console.log("Linha: " + row.data);
    var pessoa;
    if(row.inPessoaFisicaJuridica == '1'){
      pessoa = new PessoaFisica("11111111111", "PESSOAFISICA");
    }
    fornecedor = new FornecedorConversao("224242", new Fornecedor(pessoa, 'N'));
    console.log(fornecedor.fornecedor.informacaoContribuinte);
    registros++;
  },
  complete: () =>
    console.log("Terminou com "+registros+" recuperados")
  
});