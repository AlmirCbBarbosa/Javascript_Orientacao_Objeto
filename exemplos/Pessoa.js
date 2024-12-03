 /*
    Classe de modelo para consulta para futuro projetos POO
    Encapsulamento -> Em js so existe dois tipos de encapsulamento:
        *publico -> não tem nenhuma palavra reservada é padrão em js;
        *protegido -> coloca-se '#' como primeiro caractere do nome de um atributo.
 */
 
class Pessoa{
    static qtdPessoa = 0;
    #nome;
    #idade ;
    #peso;
    #altura;

    //método construtor
    constructor (nome, idade, peso, altura){
        this.#nome = nome;
        this.#idade = idade;
        this.#peso = peso;
        this.#altura = altura;
        Pessoa.qtdPessoa += 1; //atributo de classe (static)
    }

    //métodos get, tem que usar a palavra reservada get
    get nome(){
        return this.#nome;
    }

    get idade(){
        return this.#idade;
    }

    //métodos set, tem que usar a palavra reservada set
    set nome(nome){
        this.#nome = nome;
    }

    set idade(idade){
        this.#idade = idade;
    }

    //métodos comuns
    exibir(){
        console.log("Nome: " + this.#nome);
        console.log("Idade: " + this.#idade);
        console.log("Peso: " +this.#peso);
        console.log("Altura: " + this.#altura);
        console.log("Quantidade de Pessoas: " + Pessoa.qtdPessoa);
        console.log("");

    }
}

// Usando a classe

let pessoa1 = new Pessoa("Almir", 38, 92.3, 1.72);
let pessoa2 = new Pessoa("Walmir", 35, 92.3, 1.72);
let pessoa3 = new Pessoa("Liliane", 52, 92.3, 1.72);

pessoa1.exibir();
pessoa2.exibir();
pessoa3.exibir();

pessoa1.nome = "cavalo"; // maneira de entrar com um novo valor em um método set
console.log(pessoa1.nome); // maneira de se utilizar um método get