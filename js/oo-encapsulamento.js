// ENCAPSULAMENTO-OO-JS

class Veiculo {
    _nome 
    _fabricante
    _cor 
    _ano

    constructor($nome,$fabricante,$cor,$ano){

        this._nome = $nome;
        this._cor = $cor;
        this._fabricante = $fabricante;
        this._ano = $ano;
    }

    get nome (){
        return this._nome
    }

    set nome (novoNome) {
        this._nome = novoNome;
    }

    get cor (){
        return this._cor
    }

    set cor (novaCor) {
        this._cor = novaCor;
    }
}



// instanciamento

let carro1 = new Veiculo ('$nome','$cor','$fabricante','$ano');
let carro2 = new Veiculo ('$nome','$cor','$fabricante','$ano')

carro1._nome = 'Maserati-Corsel'
carro1._cor = 'Vermelho'
carro1._fabricante = 'Maseratti-Italy'
carro1._ano = 2023;

console.log(carro1._nome);
console.log(carro1._cor);
console.log(carro1._fabricante);
console.log(carro1._ano);

// ----------------------------------------
console.log("-------------------------------------");
carro2._nome = 'Mustang'
carro2._cor = 'Branco'
carro2._fabricante = 'GM'
carro2._ano = 2022;

console.log(carro2._nome);
console.log(carro2._cor);
console.log(carro2._fabricante);
console.log(carro2._ano);





































































/**
 * class Pessoa {

    // atributos
    _nome
    _idade
    _peso
    _altura
    _imc

    constructor($nome, $idade, $peso, $altura) {
        // this.(anderline "_" )atributo usado em convenção da liguagem para  informar que é privado 
        // this.(tralha "#")atributo de documentação da linguagem indicando um atributo privado não muito usado devido as versões do ECMA anteriores

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
 */