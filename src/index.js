import { FornecedorConversao } from './model/fornecedorConversao';
import { Fornecedor } from './model/fornecedor';
import { PessoaFisica } from './model/PessoaFisica';

import { parse } from 'papaparse';
import { createReadStream } from 'fs';
import { FornecedorLegado } from './model/FornecedorLegado';

const file = createReadStream('./data/fornecedor2.csv');
var registros = 0;

parse(file, {
  worker: true,
  header: true,
  step: (row) => {
    var fornecedorLegado = new FornecedorLegado(
      row.data.cdFornecedor,
      row.data.nmFornecedor,
      row.data.nmFantasia,
      row.data.inPessoaFisicaJuridica,
      row.data.nrCGCCPF,
      row.data.nrInscricaoEstadual,
      row.data.nrInscricaoMunicipal,
      row.data.inContribuinte,
      row.data.cdGrupoCBO,
      row.data.cdCBO,
      row.data.nrCIINSS,
      row.data.nrPISPASEP,
      row.data.inTipoFornecimento,
      row.data.cdNaturezaCredito,
      row.data.cdPorteEmpresa,
      row.data.nrDocumentoEstrangeiro,
      row.data.DS_OBJETO_SOCIAL,
      row.data.FK_DETALHAMENTO_PESSOA);

      console.log(fornecedorLegado);
    registros++;
  },
  complete: () =>
    console.log("Terminou com " + registros + " recuperados")
});