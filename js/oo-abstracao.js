// Abstração de Objeto Real em JS-OO
/**
 * agencia
 * numeroConta
 * numeroAgencia
 * saldo
 * limite
 */

// Criar  o objeto usando camelCase declarando as prmeiras letras maiusculas
class ContaBancaria {

    /*
     - Ao se criar os atributos por boas pratica "se declara a segunda palavra com a letra Maiuscula.
     - Para chamar o atributo se declara o metodo constructor (){} e dentro dele se se declara o operador "this.nomea-do-atributo para chamar  os atributos do objeto". 

    */
    constructor() {
            this.agencia = 1075
            this.numeroConta = 8351125
            this.saldo = 50
            this.limite = 450
        }
        // fim constructor

    // declara as  ações que  o objeto tem

    depositar(valorDepositado) {
        this.saldo += valorDepositado;
    }

    sacar(valorSacado) {
        this.saldo -= valorSacado;
        
    }

    
    verSaldo() {
        return this.saldo
    }
}
// fim objeto 


// Criando  instanciamento do Obejto ContaBancaria
let cc = new ContaBancaria()




console.log("Numero da Agencia : " + cc.agencia);
console.log("Numero da ContaCorrente : " + cc.numeroConta);
console.log("Saldo da Conta : " + cc.verSaldo().toFixed(2));
console.log("Saldo do Limite : " + cc.limite.toFixed(2));