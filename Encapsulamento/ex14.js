class Retangulo {
    
    _base = 0;
    _altura = 0;
    _area = 0;
    
    
    constructor(base, altura) {
        this._base = base;
        this._altura = altura;
    }
    
    get Area() {
        return `Área: ${this._area = this._base * this._altura} m²`;
    }
    
    set Base(valor) {
        if (valor > 0) {
            this._base = valor;
        } else {
            console.log("Base inválida. A base deve ser um número positivo.");
        }
    }
    
    set Altura(valor) {
        if (valor > 0) {
            this._altura = valor;
        } else {
            console.log("Altura inválida. A altura deve ser um número positivo.");
        }
    }
    
}

objeto = new Retangulo(5, 10);

console.log(objeto.Area);