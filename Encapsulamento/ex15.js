class ContaBancaria {
    
    #saldo = 0;
    #hash = "";
    
    constructor(id, titular, saldo, senha) {
        this._id = id;
        this._titular = titular;
        this.#saldo = saldo;
        this.#hash = this.gerarHash(senha);
    }
    
    gerarHash(senha) {
        const crypto = require('crypto');
        return crypto.createHash('sha256').update(senha).digest('hex');
    }
    
    validarSenha(chave) {
        return this.gerarHash(chave) === this.#hash;
    }
    
    sacar(valor, chave) {
        if (this.validarSenha(chave)) {
            if (this.#saldo >= valor) {
                this.#saldo -= valor;
                console.log("Saque realizado com sucesso.");
                console.log(`Saldo atual: ${this.#saldo}`);
            } else {
                console.log("Saldo insuficiente para realizar o saque.");
            }
        } else {
            console.log("Senha inválida. Não é possível realizar o saque.");
        }
    }
    
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log("Depósito realizado com sucesso.");
            console.log(`Saldo atual: ${this.#saldo}`);
        } else {
            console.log("Valor inválido para depósito.");
        }
    }
}

conta = new ContaBancaria(1, "João", 1000, "senha123");
conta.sacar(500, "senha123"); // Saque realizado com sucesso.
conta.sacar(600, "senha123"); // Saldo insuficiente para realizar o saque.
conta.depositar(1); // Depósito realizado com sucesso.