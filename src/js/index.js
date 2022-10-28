function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.nome = function() {
  return this.nome + ' sou eu';
}

const pedro = new Pessoa('Pedro', 20);
console.log(pedro);

class Pessoa2 {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  nome() {
    return this.nome + ' sou eu';
  }
}

const pedroClasse = new Pessoa2('Pedro', 20);
console.log(pedroClasse.__proto__);
