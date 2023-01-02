// ENCAPSULAMENTO-OO-JS

class Pessoa {

    // atributos
    _nome
    _idade
    _peso
    _altura
    _imc

    constructor($nome, $idade, $peso, $altura) {
        // this._atributo usado em convenção da liguagem para  informar que é privado 
        // this.#atributo documentação da linguagem indicando um atributo privado

        this._nome = $nome;
        this._idade = $idade;
        this.peso = $peso;
        this.altura = $altura;
        this.imc = (this.peso / (this.altura ** 2)).toFixed(2)

    }

    // GET/SET - NOME
    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    // GET/SET - IDADE
    get idade() {
        return this._idade;
    }

    set idade(novaIdade) {
        this._idade = novaIdade;
    }

    // GET/SET - PESO   
    get peso() {
        return this._peso;
    }

    set peso(novoPeso) {
        this._peso = novoPeso;
    }

    // GET/SET - ALTURA   
    get altura() {
        return this._altura;
    }

    set altura(novaAltura) {
        this._altura = novaAltura;
    }



}

// Instanciamento

let pessoa1 = new Pessoa('Lucas Brito', 23, 78.2, 1.89)
let pessoa2 = new Pessoa('Angela Cunha',43,58.2,1.69)
let pessoa3 = new Pessoa('Gabriel Predosa',23,98.2,1.99)
    // let pessoa4 = new Pessoa('Fernado Couto',53,88.2,2.01)


// console.log('------------------------------');
// // console.log('Nome:' + pessoa1._nome);
// // console.log('Idade:' + pessoa1._idade);
// console.log('------------------------------');



// novos atibutos da class
console.log('------------------------------');
pessoa1.nome ='Gutemberg Coifras'
pessoa1.idade = 45;
pessoa1.peso = 90;
pessoa1.altura = 1.78;
console.log(`Nome: ${pessoa1.nome}`);
console.log(`Idade :${pessoa1.idade}`);
console.log(`Peso :${pessoa1.peso}`);
console.log(`Altura : ${pessoa1.altura}`);
console.log(`IMC : ${pessoa1.imc}`);
console.log('------------------------------');

pessoa2.nome ='Luciano Bitencourt'
pessoa2.idade = 45;
pessoa2.peso = 110;
pessoa2.altura = 1.78;
console.log(`Nome: ${pessoa2.nome}`);
console.log(`Idade :${pessoa2.idade}`);
console.log(`Peso :${pessoa2.peso}`);
console.log(`Altura : ${pessoa2.altura}`);
console.log(`IMC : ${pessoa2.imc}`);

console.log('------------------------------');
pessoa3.nome= 'Vitor Hugo'
pessoa3.idade = 12
pessoa3.altura = 1.50
pessoa3.peso = 39
console.log(pessoa3.nome);
console.log(pessoa3.idade);
console.log(pessoa3.peso);
console.log(pessoa3.altura);
console.log(pessoa3.imc);
console.log('------------------------------');
// console.log(pessoa4);
// console.log('------------------------------');