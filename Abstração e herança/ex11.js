class Funcionario {
    
    constructor(nome, salarioBruto) {
        
        if (new.target === Funcionario) {
            throw new Error("Não é possível instanciar uma classe abstrata");
        }
        
        this.nome = nome;
        this.salarioBruto = salarioBruto;
        this.salarioLiquido = 0;
        this.salarioMinimo = 1612;
        this.descontoInss = 0.075;
        
    }
    
    calcularSalario() {
        throw new Error("Método abstrato");
    }
    
    analisarSalario() {
        console.log(`O salário liquido do funcionário ${this.nome} que é um funcionário ${this.constructor.name} é de R$ ${this.salarioLiquido.toFixed(2)}`);
        
        console.log(`O salário do funcionário ${this.nome} é equivalente a ${this.salarioLiquido / this.salarioMinimo} salários mínimos`);
    }
}

class Horista extends Funcionario {

    constructor(nome, valorHora, horasTrabalhadas) {
        super(nome, valorHora * horasTrabalhadas);

    }

    calcularSalario = () => this.salarioLiquido = this.salarioBruto - (this.salarioBruto * this.descontoInss);
}

class Mensalista extends Funcionario {

    calcularSalario = () => this.salarioLiquido = this.salarioBruto - (this.salarioBruto * this.descontoInss);
}


const opcoes = [new Horista("João", 20, 160), new Mensalista("Maria", 3000)];

for (let funcionario of opcoes) {
    funcionario.calcularSalario();
    funcionario.analisarSalario();
}