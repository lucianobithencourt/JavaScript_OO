// Abstração em JS-OO

class contaBancaria {

    // agencia
    // numeroConta
    // saldo
    // limite

    constructor() {
        this.agencia = 4569;
        this.numeroConta = 16403;
        this.saldo = 60;
        this.limite = 250;
    }

    depositar(valorDepositado) {
        this.saldo += valorDepositado;
    }

    sacar(valorSaque) {
        this.saldo -= valorSaque;
    }

    consultarSaldo() {
        return this.saldo
    }
}

let cc = new contaBancaria()
let cp = new contaBancaria ()

console.log(cp.consultarSaldo());

cp.depositar(240)

console.log(cp.consultarSaldo());


console.log(cc.consultarSaldo());
cc.depositar(440)

cp.depositar(1500)

console.log(`Saldo C/C ${cc.consultarSaldo().toFixed(2)}`);
console.log(`Saldo C/P ${cp.consultarSaldo()}`);
