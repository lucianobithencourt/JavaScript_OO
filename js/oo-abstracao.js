// Abstração de Objeto Real em JS-OO
/**
 * agencia
 * numeroConta
 * numeroAgencia
 * saldo
 * limite
 */

// Criar  o objeto usando camelCase declarando as prmeiras letras maiusculas
/*class ContaBancaria {

    /*
     - Ao se criar os atributos por boas pratica "se declara a segunda palavra com a letra Maiuscula.
     - Para chamar o atributo se declara o metodo constructor (){} e dentro dele se se declara o operador "this.nomea-do-atributo para chamar  os atributos do objeto". 

    /**  
    constructor() {
            this.agencia = 1075
            this.numeroConta = 8351125
            this.saldo = 50
            this.limite = 45
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

cc.depositar(450)




console.log("Numero da Agencia : " + cc.agencia);
console.log("Numero da ContaCorrente : " + cc.numeroConta);
console.log("Saldo da Conta : " + cc.verSaldo().toFixed(2));
console.log("Saldo do Limite : " + cc.limite.toFixed(2));

document.write(`Numero da Agencia :  ${cc.agencia} <br><br>`);
document.write(`Numero da ContaCorrente : ${cc.numeroConta}<br><br>`);
document.write(`Saldo da Conta :  ${cc.verSaldo().toFixed(2)}<br><br>`);
document.write(`Saldo do Limite : ${cc.limite.toFixed(2)}<br>`);
*/

// ABSTRAÇÃO OBJETO Pessoa 

class ContaBancaria {
    constructor(pa_agencia,pa_conta,pa_saldo,pa_limite){
        this.agencia = pa_agencia;
        this.conta = pa_conta;
        this.saldo = pa_saldo;
        this.limite = pa_limite;
    }

    // Metodos 

    depositar(valorDeposito){
        this.saldo += valorDeposito
    }

    sacar(valorSaque) {
        this.saldo -= valorSaque
    }

    consultarSaldo () {
        return this.saldo
    }
}

// Instaciamento 
let cpoup = new ContaBancaria ('0688','7531595',45,100)

cpoup.depositar(450)

cpoup.sacar(500)

cpoup.depositar(500)

console.log(`Agencia:${cpoup.agencia}`);
console.log(`Conta: ${cpoup.conta}`);
console.log(`Saldo:${cpoup.saldo.toFixed(2)}`);
console.log(`Limte ${cpoup.limite}`);

console.log('-------------------------------');

let ccorrent = new ContaBancaria ('6892','16300-4',500,1500)

console.log(`Agencia:${ccorrent.agencia}`);
console.log(`Conta: ${ccorrent.conta}`);
console.log(`Saldo:${ccorrent.saldo.toFixed(2)}`);
console.log(`Limite ${ccorrent.limite.toFixed(2)}`);