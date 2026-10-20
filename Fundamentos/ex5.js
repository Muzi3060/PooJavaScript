class Gamer {
    // 1. Declaração obrigatória do campo privado no corpo da classe
    #jogosFavoritos = [];
    
    constructor(nome, nick) {
        
        this.nome = nome;
        this.nick = nick;
        
    }
    
    #mostrarFicha() {
        console.log(`Nome: ${this.nome}, Nick: ${this.nick}`);
    }
    
    adicionarJogosFavoritos(jogo) {
        if (!this.#jogosFavoritos.includes(jogo)) {
            this.#jogosFavoritos.push(jogo);
        } else {
            console.log(`O jogo "${jogo}" já está na lista de favoritos.`);
        }
    }
    
    mostrarFichaCompleta() {
        this.#mostrarFicha();
        
        if (this.#jogosFavoritos.length > 0) {
            console.log("Jogos Favoritos:")
        
            this.#jogosFavoritos.forEach((jogo, index) => console.log(`${index + 1}. ${jogo}`));
        } else {
            console.log("Nenhum jogo favorito adicionado.");
        }
    }
}


const gamer1 = new Gamer("João", "Joaozinho");
gamer1.mostrarFichaCompleta();
console.log("\n================================\n");
gamer1.adicionarJogosFavoritos("FIFA 23");
gamer1.adicionarJogosFavoritos("Call of Duty");
gamer1.adicionarJogosFavoritos("the witcher 3");
gamer1.adicionarJogosFavoritos("the witcher 3");

gamer1.mostrarFichaCompleta();