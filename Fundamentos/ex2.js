class Produto {
    
    constructor(nome, preco) {
        
        this.nome = nome;
        this.preco = preco;
    }
    
    mostrarEtiqueta() {
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}`);
    }
}


produto1 = new Produto("Camiseta", 29.99);

produto1.mostrarEtiqueta();