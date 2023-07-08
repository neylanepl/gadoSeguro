class Vacina{
  constructor(){
    this.nome = null;
    this.info = null;
    this.fabricante = null;
  }

  getNome() {
    return this.nome;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getInfo() {
    return this.info;
  }

  setInfo(info) {
    this.info = info;
  }

  getFabricante() {
    return this.fabricante;
  }

  setFabricante(fabricante) {
    this.fabricante = fabricante;
  }
}

module.exports = Vacina;