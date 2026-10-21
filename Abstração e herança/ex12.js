class Personagem {
    
    constructor (nome, vida) {
        
        if (new.target === Personagem) {
            throw new Error("Não é possível instanciar uma classe abstrata");
        }
        
        this.nome = nome;
        this.vida = vida;
        this.golpes = [];
    }
    
    ValoresAleatorios(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    atacar(alvo, forca){
        const dano = this.ValoresAleatorios(100, forca);
        
        if (this.vida <= 0) {
            console.log(`${this.nome} está morto e não pode atacar`);
            return;
        }
        console.log(`${this.nome} atacou ${alvo.nome} com um golpe ${this.golpes[Math.floor(Math.random() * this.golpes.length)]} causando ${dano} de dano`);

        alvo.receberDano(dano);
    }
    
    receberDano(dano) {
        this.vida -= dano;
        if (this.vida < 0) {
            this.vida = 0;
            console.log(`${this.nome} morreu`);
        }
    }
    
    curar() {
        throw new Error("Não é possível instanciar uma classe abstrata");
    }
}

class Guerreiro extends Personagem {
    
    constructor(nome, vida) {
        super(nome, vida);
        
        this.golpes = ["Espadada", "Chute", "Investida", "Golpe de Espada", "Golpe de Machado"];
    }
    
    curar() {
        const cura = this.ValoresAleatorios(100, 250);
        
        if (this.vida <= 0) {
            console.log(`${this.nome} está morto e não pode ser curado`);
            return;
        }
        
        this.vida += cura;
        console.log(`${this.nome} se curou com uma poção de cura em ${cura} pontos de vida`);
    }
}

class Mago extends Personagem {
    
    constructor(nome, vida) {
        super(nome, vida);
        
        this.golpes = ["Bola de Fogo", "Raio", "Explosão", "Congelamento", "Choque"];
    }
    
    curar() {
        if (this.vida <= 0) {
            console.log(`${this.nome} está morto e não pode ser curado`);
            return;
        }
        const cura = this.ValoresAleatorios(200, 350);
        this.vida += cura;
        console.log(`${this.nome} se curou com uma magia de cura em ${cura} pontos de vida`);
    }
}

const guerreiro = new Guerreiro("Kratos", 1000);
const mago = new Mago("Merlim", 1000);

guerreiro.atacar(mago, 500);
mago.atacar(guerreiro, 500);
mago.curar();
guerreiro.curar();
