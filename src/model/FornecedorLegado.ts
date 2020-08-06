export class FornecedorLegado {

  constructor(
    public cdFornecedor: string,
    public nmFornecedor: string,
    public nmFantasia: string,
    public inPessoaFisicaJuridica: string,
    public nrCGCCPF: string,
    public nrInscricaoEstadual: string,
    public nrInscricaoMunicipal: string,
    public inContribuinte: string,
    public cdGrupoCBO: string,
    public cdCBO: string,
    public nrCIINSS: string,
    public nrPISPASEP: string,
    public inTipoFornecimento: string,
    public cdNaturezaCredito: string,
    public cdPorteEmpresa: string,
    public nrDocumentoEstrangeiro: string,
    public DS_OBJETO_SOCIAL: string,
    public FK_DETALHAMENTO_PESSOA: string) { }

  isPessoaFisicaJuridica(fornecedorLegado: FornecedorLegado) {
    if (fornecedorLegado.inPessoaFisicaJuridica == '1') return false;
    return true;
  }
}