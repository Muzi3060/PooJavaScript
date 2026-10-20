class Caneta {
    #tampada = true;
    
    constructor(cor) {
        this.cor = cor;
        
        this.cores = {
            azul: "\x1b[34m",
            vermelho: "\x1b[31m",
            verde: "\x1b[32m"
        };
    }
    
    destampar() {
        this.#tampada = false;
    }
    
    tampar() {
        this.#tampada = true;
    }
    
    escrever(msg) {
        if (!this.#tampada) {
            if (this.cores[this.cor]) { // se a cor está no dicionário de cores
                console.log(`${this.cores[this.cor]}${msg}\x1b[0m`);
                
                // se não estiver, imprime a mensagem de cor inválida
            } else {
                console.log(`${this.cores.vermelho}Cor inválida.\x1b[0m`);
            }
        } else {
            console.log(`${this.cores.vermelho}A caneta está tampada. Não é possível escrever.\x1b[0m`);
        }
    }
}

caneta1 = new Caneta("azul");
caneta2 = new Caneta("roxo");

caneta1.escrever("Olá mundo!");
caneta1.destampar();
caneta2.destampar();
caneta1.escrever("Olá mundo!");
caneta2.escrever("Olá mundo!"); 