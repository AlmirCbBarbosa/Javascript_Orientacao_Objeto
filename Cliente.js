class Cliente{
    static id = 1;
    #idCliente; //inteiro
    #nome; //string
    #email; //string
    #telefone; //string

    //método construtor
    constructor (nome, email, telefone){
        this.#idCliente = Cliente.id;
        this.#nome = nome;
        this.#email = email;
        this.#telefone = telefone;
        Cliente.id +=1;
    }

    
    //método getters
    
    get idCliente(){
        return this.#idCliente;
    }

    get nome(){
        return this.#nome;
    }

    get email(){
        return this.#email;
    }

    get telefone(){
        return this.#telefone;
    }

    //método setters
    set nome(nome){
        this.#nome = nome;
    }

    set email(email){
        this.#email = email;
    }

    set telefone(telefone){
        this.#telefone = telefone;
    }

    //metodo de teste. Pode apagar
    exibirDados(){
        console.log(`Id do cliente: ${this.#idCliente}`);
        console.log(`Nome do cliente: ${this.#nome} `);
        console.log(`Email do cliente: ${this.#email}`);
        console.log(`Telefone do cliente: ${this.#telefone}`);
        console.log("");
    }
}

 export default Cliente;