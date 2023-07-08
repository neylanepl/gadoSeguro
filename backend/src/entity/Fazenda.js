class Fazenda {
  constructor() {
    this.idFazenda = null;
    this.nome = null;
    this.sitio = null;
    this.cidade = null;
    this.cep = null;
    this.complemento = null;
    this.numeros = null;
  }

  setId(id) {
    this.idFazenda = id;
  }

  getId() {
    return this.idFazenda;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getNome() {
    return this.nome;
  }

  setSitio(sitio) {
    this.sitio = sitio;
  }

  getSitio() {
    return this.sitio;
  }

  setCidade(cidade) {
    this.cidade = cidade;
  }

  getCidade() {
    return this.cidade;
  }

  setCep(cep) {
    this.cep = cep;
  }

  getCep() {
    return this.cep;
  }

  setComplemento(complemento) {
    this.complemento = complemento;
  }

  getComplemento() {
    return this.complemento;
  }

  setNumeros(numeros) {
    this.numeros = numeros;
  }

  getNumeros() {
    return this.numeros;
  }
}

module.exports = Fazenda;