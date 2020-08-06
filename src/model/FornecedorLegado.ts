export class FornecedorLegado {
    cdFornecedor: string;
    nmFornecedor: string;
    nmFantasia?: string;
    inPessoaFisicaJuridica: string;
    nrCGCCPF: string;
    nrInscricaoEstadual?: string;
    nrInscricaoMunicipal?: string;
    inContribuinte?: string;
    cdGrupoCBO?: string;
    cdCBO?: string;
    nrCIINSS?: string;
    nrPISPASEP?: string;
    inTipoFornecimento?: string;
    cdNaturezaCredito?: string;
    cdPorteEmpresa?: string;
    nrDocumentoEstrangeiro?: string;
    DS_OBJETO_SOCIAL?: string;
    FK_DETALHAMENTO_PESSOA?: string;
    constructor(
      cdFornecedor: string,
      nmFornecedor: string,
      nmFantasia: string,
      inPessoaFisicaJuridica: string,
      nrCGCCPF: string,
      nrInscricaoEstadual: string,
      nrInscricaoMunicipal: string,
      inContribuinte: string,
      cdGrupoCBO: string,
      cdCBO: string,
      nrCIINSS: string,
      nrPISPASEP: string,
      inTipoFornecimento: string,
      cdNaturezaCredito: string,
      cdPorteEmpresa: string,
      nrDocumentoEstrangeiro: string,
      DS_OBJETO_SOCIAL: string,
      FK_DETALHAMENTO_PESSOA: string) {

      this.cdFornecedor = cdFornecedor;
      this.nmFornecedor = nmFornecedor;
      this.nmFantasia = nmFantasia;
      this.inPessoaFisicaJuridica = inPessoaFisicaJuridica;
      this.nrCGCCPF = nrCGCCPF;
      this.nrInscricaoEstadual = nrInscricaoEstadual;
      this.nrInscricaoMunicipal = nrInscricaoMunicipal;
      this.inContribuinte = inContribuinte;
      this.cdGrupoCBO = cdGrupoCBO;
      this.cdCBO = cdCBO;
      this.nrCIINSS = nrCIINSS;
      this.nrPISPASEP = nrPISPASEP;
      this.inTipoFornecimento = inTipoFornecimento;
      this.cdNaturezaCredito = cdNaturezaCredito;
      this.cdPorteEmpresa = cdPorteEmpresa;
      this.nrDocumentoEstrangeiro = nrDocumentoEstrangeiro;
      this.DS_OBJETO_SOCIAL = DS_OBJETO_SOCIAL;
      this.FK_DETALHAMENTO_PESSOA = FK_DETALHAMENTO_PESSOA;
    }
  }