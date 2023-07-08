class Bovino {
  constructor() {
    this.idBovino = null;
    this.Fazenda_idFazenda = null;
    this.nome = null;
    this.Vaca_idVaca = null;
    this.reprodutor = null;
    this.sexo = null;
    this.data_nascimento = null;
    this.chifre = null;
    this.peso = null;
    this.cor = null;
  }

  setId(id) {
    this.idBovino = id;
  }

  getId() {
    return this.idBovino;
  }

  getFazendaIdFazenda() {
    return this.Fazenda_idFazenda;
  }

  setFazendaIdFazenda(Fazenda_idFazenda) {
    this.Fazenda_idFazenda = Fazenda_idFazenda;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getNome() {
    return this.nome;
  }

  getVacaIdVaca() {
    return this.Vaca_idVaca;
  }

  setVacaIdVaca(Vaca_idVaca) {
    this.Vaca_idVaca = Vaca_idVaca;
  }

  getReprodutor() {
    return this.reprodutor;
  }

  setReprodutor(reprodutor) {
    this.reprodutor = reprodutor;
  }

  getSexo() {
    return this.sexo;
  }

  setSexo(sexo) {
    this.sexo = sexo;
  }

  getDataNascimento() {
    return this.data_nascimento.toISOString().split("T")[0];
  }

  setDataNascimento(data_nascimento) {
    this.data_nascimento = new Date(data_nascimento);
  }

  getChifre() {
    return this.chifre;
  }

  setChifre(chifre) {
    this.chifre = chifre;
  }

  getPeso() {
    return this.peso;
  }

  setPeso(peso) {
    this.peso = peso;
  }

  getCor() {
    return this.cor;
  }

  setCor(cor) {
    this.cor = cor;
  }
}

module.exports = Bovino;