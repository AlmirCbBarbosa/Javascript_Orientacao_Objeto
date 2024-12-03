import Cliente from './Cliente.js'

class Principal{
    static colecaoClientes = [];

    static cadastrarCliente(nome, email, telefone){
        let cliente = new Cliente(nome, email, telefone);
        Principal.colecaoClientes.push(cliente);
    }

    //buscar um cliente Clientes da coleção de clientes
    static buscarCliente(id){
        const cliente = Principal.colecaoClientes.find(c => c.idCliente == id);
        if(cliente){
            cliente.exibirDados();
        }else{
            console.log(`Não há cliente com id ${id}`);
        }
        
    }

    //método para exibir todos os clientes (para testes)
    static exibirClientes(){
        Principal.colecaoClientes.forEach(cliente => cliente.exibirDados());
    }
}

export const {cadastrarCliente, exibirClientes, buscarCliente } = Principal;