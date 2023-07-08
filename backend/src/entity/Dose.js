class Dose{
  constructor(){
    this.idDose = null;
    this.nome_vacina = null;
    this.lote = null;
    this.info = null;
    this.data_aplicada = null;
    this.data_prev = null;
  }

  getIdDose() {
    return this.idDose;
  }

  setIdDose(idDose) {
    this.idDose = idDose;
  }

  getNomeVacina() {
    return this.nome_vacina;
  }

  setNomeVacina(nome_vacina) {
    this.nome_vacina = nome_vacina;
  }

  getLote() {
    return this.lote;
  }

  setLote(lote) {
    this.lote = lote;
  }

  getInfo() {
    return this.info;
  }

  setInfo(info) {
    this.info = info;
  }

  getDataAplicada() {
    return this.data_aplicada.toISOString().split("T")[0];
  }

  setDataAplicada(data_aplicada) {
    this.data_aplicada = new Date(data_aplicada);
  }

  getDataPrev() {
    if(!this.data_prev!=null){
      return null;
    }else{
    return this.data_prev.toISOString().split("T")[0];
  }
  }

  setDataPrev(data_prev) {
    if(data_prev!=null)
      this.data_prev = new Date(data_prev);
  }
}

module.exports = Dose;