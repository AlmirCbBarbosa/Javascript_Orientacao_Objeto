import {cadastrarCliente, exibirClientes, buscarCliente} from './Principal.js'

cadastrarCliente("Almir de Lima Barbosa", "almirdelimabarbosa@gmail.com", "31 99694-6834");
cadastrarCliente("Liliane", "lilianeoliveira@gmail.com", "31 98597-1095");


exibirClientes();

buscarCliente(2);