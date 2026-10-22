class Diario {
    
    #segreddos = [];
    #senha = "123456";
    
    escrever(msg) {
        this.#segreddos.push(msg);
    }
    
    ler(senha) {
        if (senha === this.#senha) {
            return this.#segreddos;
        } else {
            return "Senha incorreta!";
        }
    }
}


diario = new Diario();

diario.escrever("Hoje foi um dia muito bom!");
diario.escrever("Amanhã será um dia ainda melhor!");
console.log(diario.ler("123456")); // senha correta
console.log(diario.ler("12345")); // senha errado