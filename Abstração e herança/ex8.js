class  Poligono {
    
    constructor(qtdLados) {
        if (new.target === Poligono) {
            throw new Error("Não é possível instanciar uma classe abstrata");
        } 
        
        this.qtdLados = qtdLados;
    }
    
    perimetro() {
        throw new Error("Método abstrato");
    }
    area() {
        throw new Error("Método abstrato");
    }
}

class Quadrado extends Poligono {
    
    constructor(lado) {
        super(4);
        this.lado = lado;
    }
    
    perimetro = () => this.qtdLados * this.lado;
    
    area = () => this.lado ** 2;
}

class Circulo extends Poligono {
    
    constructor(raio) {
        super(0);
        this.raio = raio;
    }
    
    perimetro = () => 2 * Math.PI * this.raio;
    
    area = () => Math.PI * this.raio ** 2;
}

const quadrado = new Quadrado(5);
const circulo = new Circulo(3);

console.log(`Quadrado: Perímetro = ${quadrado.perimetro()}, Área = ${quadrado.area()}`);
console.log(`Círculo: Perímetro = ${circulo.perimetro()}, Área = ${circulo.area()}`);