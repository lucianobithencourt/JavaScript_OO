// ABSTRAÇÃO POO-JS




// ABSTRAÇÃO OO-JS

class Pessoa {

    // atributos
    nome
    idade 
    peso 
    altura

    constructor($nome,$idade,$peso,$altura){

        this.nome = $nome;
        this.idade = $idade;
        this.peso = $peso;
        this.altura = $altura;
        this.imc = (this.peso/(this.altura**2)).toFixed(2)

    }
    
}

// instaciamento

let pessoa1 = new Pessoa('Lucas Brito',23,78.2,1.89)
let pessoa2 = new Pessoa('Angela Cunha',43,58.2,1.69)
let pessoa3 = new Pessoa('Gabriel Predosa',23,98.2,1.99)
let pessoa4 = new Pessoa('Fernado Couto',53,88.2,2.01)



console.log(pessoa1);
console.log('------------------------------');
console.log(pessoa2);
console.log('------------------------------');
console.log(pessoa3);
console.log('------------------------------');
console.log(pessoa4);
console.log('------------------------------');