class Transporte {
    
    constructor(distancia) {
        
        if (new.target === Transporte) {
            throw new Error("Não é possível instanciar uma classe abstrata");
        }
        
        this.distancia = distancia;
        this.frete = 0;
    }
    
    calcularFrete() {
        throw new Error("Método abstrato");
    }
}

class Moto extends Transporte {

    fator = 0.50;
    
    calcularFrete = () => this.frete = this.distancia * this.fator;
}

class Caminhao extends Transporte {

    fator = 1.20;

    calcularFrete() {
        if (this.distancia < 50) {
            console.log("Distancia minima para entrega por caminhão é de 50km");
        } else {
            this.frete = this.distancia * this.fator;
        }
    }
}

class Drone extends Transporte {

    fator = 9.50;
    
    calcularFrete() {
        if (this.distancia > 10) {
            console.log("Distancia maxima para entrega por drone é de 10km");
        } else {
            this.frete = this.distancia * this.fator;
        }
    }
}

const opcoes = [new Moto(10), new Caminhao(50), new Drone(10)];

for (let transporte of opcoes) {
    transporte.calcularFrete();
    console.log(`Frete para ${transporte.constructor.name}: R$ ${transporte.frete.toFixed(2)}`);
} 