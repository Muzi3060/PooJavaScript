class Churrasco {
    
    constructor(qtdPessoas, titulo) {
        
        this.qtdPessoas = qtdPessoas;
        this.titulo = titulo;
    }
    
    calcularCarne() {
        return this.qtdPessoas * 0.4;
    }
    
    calcularCustoTotal() {
        return this.calcularCarne() * 82.40;
    }
    
    calcularPrecoPorPessoa() {
        return this.calcularCustoTotal() / this.qtdPessoas;
    }
    
    detalhesChurrasco() {
        console.log(`Churrasco: ${this.titulo}, Quantidade de Pessoas: ${this.qtdPessoas}, Preço por Pessoa: R$${this.calcularPrecoPorPessoa().toFixed(2)}`);
        console.log(`Custo Total: R$${this.calcularCustoTotal().toFixed(2)}`);
    }
}

churrasco1 = new Churrasco(15, "Churras dos amigos");

churrasco1.detalhesChurrasco();