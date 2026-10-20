class Livro {
    
    constructor(titulo, totalPaginas) {
        
        this.pagAtual = 1;
        this.titulo = titulo;
        this.totalPaginas = totalPaginas;
        console.log(`Boa leitura! Você está começando a ler o livro "${this.titulo}" com ${this.totalPaginas} páginas.`);
    }
    
    verificarFim() {
        if (this.pagAtual === this.totalPaginas) {
            console.log("Você chegou ao Fim do Livro");
            return true;
        }
        return false;
    }
    
    avancarPagina() {
       if (!this.verificarFim()) {
            this.pagAtual++;
            console.log(`Você avançou para a página ${this.pagAtual}`);
        }
    }
}


livro1 = new Livro("O Senhor dos Anéis", 25);

while (!livro1.verificarFim()) {
    livro1.avancarPagina();
}