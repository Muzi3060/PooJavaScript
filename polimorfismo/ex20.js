class Pagamento {
    
    #valor;
    
    constructor() {
        
        if (new.target === Pagamento) {
            throw new Error("Não é possível instanciar a classe abstrata Pagamento");
        }
        this.#valor = 0;
    }
    
    get valor() {
        return this.#valor;
    }
    
    pagar(valor) {
        throw new Error("O método pagar() deve ser implementado nas classes filhas");
    }
    
    
    // aqui usamos duck typing, ou seja, não importa o tipo do objeto, mas sim se ele possui o método pagar()
    validarPagamento(valor) {
        if (typeof valor !== 'number' || valor <= 0) {
            console.error(`[${this.constructor.name}] Valor inválido para pagamento`);
            return;
        } 
        
        try {
            this.pagar(valor);
            this.#valor = valor;
            
        } catch (error) {
            console.error(`Erro: Método de pagamento ${this.constructor.name}, não aceito.`);
        }
    }
    
}

class Cartao extends Pagamento {
    pagar(valor) {
        console.log(`O método de pagamento ${this.constructor.name} foi aprovado para o valor de R$ ${valor.toFixed(2)}`);
    }
}   

class Boleto extends Pagamento {
    pagar(valor) {
        console.log(`O método de pagamento ${this.constructor.name} foi aprovado para o valor de R$ ${valor.toFixed(2)}`);  
    }
}

class Pix extends Pagamento {
    pagar(valor) {
        console.log(`O método de pagamento ${this.constructor.name} foi aprovado para o valor de R$ ${valor.toFixed(2)}`);
    }
}

class Trasferencia extends Pagamento {
}

const Pagamentos = [
    new Pix(),
    new Boleto(),
    new Cartao(),
    new Trasferencia()
]

Pagamentos.forEach(pagamento => pagamento.validarPagamento(500));