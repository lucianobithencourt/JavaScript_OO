// HERANÇA POO-JS

// classPai ou superPai

class Animal {
    constructor (){
        this.cor = ''
        this.tamanho = null
        this.peso = ''
    }

    dormir() {
        console.log('Dormindo ZZzzzZZ...ZZ..');
    }
}

/**-------------------------------------------------------------------------- */
// classFilho  ou subClass
class Cachorro extends Animal {

    constructor(){
        super()
        this.orelhas = 'Grande e caidas'
    }

    correr() {
        console.log('Animal correndo....');
    }
    
    rosnar () {
        console.log('Rosnando....');
    }
}

/**-------------------------------------------------------------------------- */
// classFilho  ou subClass
class Passaro extends Animal {
    

    constructor(){
        super()
        this.bico = 'curto'
    }


    voar(){
        console.log('Voando.. V..v..v.V');
    }
    
}
/**-------------------------------------------------------------------------- */
// classFilho  ou subClass
class Papagaio extends Passaro {
    
    constructor(){
        super()
        this.bico = 'MédioCurto'
    }
    falar(){
        console.log('Falando..Curupaco loro');
    }
    
}
// Instanciamento

let cachorro = new Cachorro ()

console.log(cachorro);
