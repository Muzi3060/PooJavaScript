class Funcionario {
    
    constructor(nome, setor, cargo) {
        
        this.nome = nome;
        this.setor = setor;
        this.cargo = cargo;
    }
    
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, trabalho no setor de ${this.setor} e meu cargo é ${this.cargo}.`);
    }
}

funcionario1 = new Funcionario("João", "Financeiro", "Analista");

funcionario1.apresentar();