class Pessoa {
    
    constructor(nome, idade) {
        
        if (new.target === Pessoa) {
            throw new Error("Não é possível instanciar a classe Pessoa diretamente.");
        }
        
        this._nome = nome;
        this._idade = idade;
    }
    
    get Idade() {
        return this._idade;
    }
    
    set Idade(valor) {
        const data = new Date();
        
        if (valor >= data.getFullYear() || (data.getFullYear() - valor) < 18 || valor <= 1900) {
            console.log("Idade inválida ou menor de idade.");
        } else {
            this._idade = valor;
            console.log("Idade atualizada com sucesso.");
            console.log(`Idade atual: ${data.getFullYear() - this._idade}`);
        }
    }
}

class Aluno extends Pessoa {
    
    #cursosOficiais = ["Engenharia", "Medicina", "Direito", "Arquitetura", "Administração"];
    
    constructor(nome, idade, curso) {
        super(nome, idade)
        if (!this.#cursosOficiais.includes(curso)) {
            throw new Error("Curso inválido. O curso deve ser um dos cursos oficiais.");
        }
        this._curso = curso;
    }
    
    get Curso() {
        return this._curso;
    }
    
    get CursosOficiais() {
        return this.#cursosOficiais;
    }

    set Curso(valor) {
        if (this.#cursosOficiais.includes(valor)) {
            this._curso = valor;
            console.log("Curso atualizado com sucesso.");
            console.log(`Curso atual: ${this.Curso}`);
        } else {
            console.log("Curso inválido. O curso deve ser um dos cursos oficiais.");
            console.log(`Cursos oficiais: ${this.CursosOficiais}`);
        }
    }
    
    addCurso(valor) {
        if (this.#cursosOficiais.includes(valor)) {
            console.log("Curso já está na lista de cursos oficiais.");
        } else {
            this.#cursosOficiais.push(valor.toLowerCase()) 
            console.log(`Curso adicionado: ${valor}`);
        }
    }
}
aluno1 = new Aluno("João", 20, "Engenharia");
console.log(aluno1.Idade);
//aluno1.Idade = 2026; // Idade inválida ou menor de idade.
aluno1.Curso = "Direito";
aluno1.addCurso("kkk");
aluno1.Curso = "kkk";

