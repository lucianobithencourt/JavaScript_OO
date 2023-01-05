// OP.SUPER POO-JS

// classPai ou superPai

class Animal {
    constructor ($cor,$tamanho,$peso){
        this.cor = $cor;
        this.tamanho = $tamanho;
        this.peso = $peso;
    }

    dormir() {
        console.log('Dormindo ZZzzzZZ...ZZ..');
    }
}

/**-------------------------------------------------------------------------- */
// classFilho  ou subClass
class Passaro extends Animal {
    

    constructor($bico,$cor,$tamanho,$peso){
        super($cor,$tamanho,$peso)
        this.bico = $bico
    }
    voar(){
        console.log('Voando.. V..v..v.V');
    }
    
}
/**-------------------------------------------------------------------------- */
// classFilho  ou subClass
class Papagaio extends Passaro {
    
    constructor($sabeFalar,$cor,$tamanho,$peso){
        super('medio',$cor,$tamanho,$peso)
        this.sabeFalar = $sabeFalar
    }
    falar(){
        console.log('Falando..Curupaco loro');
    }
    
}
// Instanciamento

let papagaio = new Papagaio (true,'vermelho-azul',45,250)
console.log(papagaio);
papagaio.voar()

