// HERANÇA POO-JS

// classPai

class Animal {
    constructor (){
        this.cor = ''
        this.tamanho = ''
    }

    dormir() {
        console.log('Dormindo ZZzzzZZ...ZZ..');
    }
}



/**-------------------------------------------------------------------------- */
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
class Gato extends Cachorro {

   

    constructor(){
        super()
        this.orelhas = 'Curtas pomtutas'
    }
        
    Miar () {
        console.log('Miando....');
    }
}

/**-------------------------------------------------------------------------- */

class Passaro extends Animal {
    

    constructor(){
        super()
        this.bico = 'curto'
    }


    voar(){
        console.log('Voando.. V..v..v.V');
    }

    
}

let cachorro = new Cachorro ()

cachorro.rosnar()

let passaro = new Passaro ()

passaro.voar()


let gato = new Gato () 

    

    gato.correr()