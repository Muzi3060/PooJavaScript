class Arquivo {
    
    constructor(nome, tamanho, extensao, aplicativo) {
        
        if (new.target === Arquivo) {
            throw new Error("Não é possível instanciar a classe Arquivo diretamente.");
        }
        
        this.nome = nome;
        this.tamanho = tamanho / 1000;
        this._extensao = extensao;
        this._app = aplicativo
    }
    
    get NomeCompleto() {
        return `${this.nome}.${this._extensao}(${this.tamanho.toFixed(2)}MB) no ${this._app}`;
    }
    
    abrir() {
        console.log(`Abrindo o arquivo ${this.NomeCompleto}`);
    }
}

class Pdf extends Arquivo {
    
    constructor(nome, tamanho) {
        super(nome, tamanho, "pdf", "Adobe Acrobat Reader");
    }
}

class Doc extends Arquivo {
    
    constructor(nome, tamanho) {
        super(nome, tamanho, "doc", "Microsoft Word");
    }
}

const arquivos = [new Pdf("documento", 1000), new Doc("relatorio", 2000) ];

arquivos.forEach(arquivo => arquivo.abrir());