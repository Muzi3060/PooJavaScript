class Termostato {
    
    #temperatura = 24.00;
    
    get Ftemperatura() {
        return `Temperatura: ${this.#temperatura}°C`;
    }

    set Temperatura(valor) {
        if (valor > 16 && valor < 30) {
            if ((valor * 2) % 1 !== 0) {
                console.log("Temperatura inválida. A temperatura deve ser um número inteiro ou um número com uma casa decimal.");
            } else {
                this.#temperatura = valor;
            }
        } else if (valor <= 16 ) {
            this.#temperatura = 16;
        } else if (valor >= 30) {
            this.#temperatura = 30;
        }
    }
}

termostato = new Termostato();

console.log(termostato.Ftemperatura);
termostato.Temperatura = 29.5
console.log(termostato.Ftemperatura);
