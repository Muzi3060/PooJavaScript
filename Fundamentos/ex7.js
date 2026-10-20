class ControleRemoto {

    #canal = 1;
    #volume = 2
    #ligado = false;
    
    ligarDesligar() {
        this.#ligado = !this.#ligado;
    }

    CanalAnterior() {
        if (this.#ligado) {
            
            if (this.#canal <= 1) {
                this.#canal = 5;
            } else {
                this.#canal--;
            }
        }

    }

    CanalSeguinte() {
        if (this.#ligado) {
            
            if (this.#canal >= 5) {
                this.#canal = 1;
            } else {
                this.#canal++;
            }
        }
        
    }

    aumentarVolume() {
        if (this.#ligado) {

            if (this.#volume === 5) {
                this.#volume = 5;
            } else {
                this.#volume++;
            }
        }

    }
    
    diminuirVolume() {
        if (this.#ligado) {
            
            if (this.#volume === 1) {
                this.#volume = 1;
            } else {
                this.#volume--;
            }
        }
    }
    
    menu() {
        
            
        if (!this.#ligado) {
            console.log("\x1b[31mO A TV está desligado\x1b[0m");
            console.log(`< CH${this.#canal} > - VOL ${this.#volume} +`);
        } else {
            console.log(`CANAL = ${this.#canal}`);
            console.log(`VOLUME = ${this.#volume}`);
            console.log(`< CH${this.#canal} > - VOL ${this.#volume} +`);
        }
            
    }
    
    logicaControle(comando) {
        
        switch (comando) {
            
            case "@":
                console.clear();
                this.ligarDesligar();
                break;
            case "+":
                console.clear();
                this.aumentarVolume();
                break;
            case "-":
                console.clear();
                this.diminuirVolume();
                break;
            case "<":
                console.clear();
                this.CanalAnterior();
                break;
            case ">":
                console.clear();
                this.CanalSeguinte();
                break;
            default:
                console.log("\x1b[31mComando inválido\x1b[0m");
                break;
        }
        
    }
    
}

const prompt = require("prompt-sync")({ sigint: true });
const controle = new ControleRemoto();

while (true) {
    controle.menu();
    controle.logicaControle(prompt());
}
