class BebidaQuente {
    
    constructor() {
        
        if (new.target === BebidaQuente) {
            throw new Error("Não é possível instanciar uma classe abstrata");
        }
    }
    
    preparar() {
        this.ferverAgua();
        this.misturar();
        this.servir();
    }
    
    ferverAgua = () => console.log("1. Fervendo água a 100 graus Celsius.");
    
    
    misturar() {
        throw new Error("Método abstrato");
    }

    servir() {
        throw new Error("Método abstrato");
    }
}

class Cafe extends BebidaQuente {
    
    misturar = () => console.log("2. Passando agua pressurizada pelo pó de café moido.");
    
    servir = () => console.log("3. Servindo em xicara pequena.");
    
}

class Cha extends BebidaQuente {
    
    misturar = () => console.log("2. Mergulhando o sachê de ervas na água.");
    
    
    servir = () => console.log("3. Servindo na caneca de porcelana com limão.");
    
}

class Leite extends BebidaQuente {

    misturar = () => console.log("2. Passando vapor pressurizado pelo bico do leite.");

    servir = () => console.log("3. Servindo na caneca grande, já com café.");
    
}

const opcao = [new Cafe(), new Cha(), new Leite()];

for (let bebida of opcao) {
    bebida.preparar();
    console.log("--------------------------------------------------");
} 