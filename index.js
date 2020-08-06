const FornecedorConversao = require ('./model/fornecedorConversao.ts')
const Fornecedor = require ('./model/fornecedor.ts')
const PessoaFisica = require ('./model/PessoaFisica.ts')
const fs = require('fs')
const csv = require('csv-parser')
const papa = require('papaparse')

const file = fs.createReadStream('./data/fornecedor2.csv');
var registros = 0;


  papa.parse(file, {
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