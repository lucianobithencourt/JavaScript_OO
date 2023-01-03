// Operador Super () - POO-JS

class Animal {
    constructor (cor,tamanho,peso){
        this.cor = cor;
        this.tamanho = tamanho;
        this.peso = peso;
    }

    dormir() {
        console.log('Dormindo ZZzzzZZ...ZZ..');
    }
}

class Passaro extends Animal {
    

    constructor(bico,cor,tamanho,peso){
        super(cor,tamanho,peso)
        this.bico = bico
    }


    voar(){
        console.log('Voando.. V..v..v.V');
    }

    
}

class Papagaio extends Passaro {
    constructor(sabeFalar,cor,tamanho,peso){
        super('medio',cor,tamanho,peso)
        this.sabeFalar = sabeFalar
    }

    falar(){
        console.log('Falando...');
    }
}


let papagaio = new Papagaio(true,'azul',25,350)
let papagaio2 = new Papagaio(false,'vermelho',5,50)

console.log(papagaio);
console.log(papagaio2);




