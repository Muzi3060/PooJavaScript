class Funcionario {
    
    constructor(nome, salario, bonus) {
        if (new.target === Funcionario) {
            throw new Error("Não é possível instanciar a classe Funcionario diretamente.");
        }
        
        this.nome = nome;
        this._salario = salario;
        this.bonus = bonus
    }
    
    calcularBonus() {
        return this._salario * this.bonus;
    }
}

class Gerente extends Funcionario {
    
    constructor(nome, salario) {
        super(nome, salario, 0.15);
    }

}

class Desginer extends Funcionario {
    constructor(nome, salario) {
        super(nome, salario, 0.08);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, salario) {
        super(nome, salario, 0.10);
    }
}

const funcionarios = [
    new Gerente("João", 5000),
    new Desginer("Maria", 3000),
    new Desenvolvedor("Pedro", 4000)
];

funcionarios.forEach(funcionario => console.log(`O bonus do funcionário ${funcionario.nome} é: R$ ${funcionario.calcularBonus().toFixed(2)}`));