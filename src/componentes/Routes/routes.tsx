import { Routes,Route } from "react-router-dom";
import { Component } from "react";
import Home from "../Home/home";
import ListaCliente from "../Cliente/listaCliente";
import FormularioCadastroCliente from "../Formulario/formularioCadastro";





type state = {
}

export default class AppRoutes extends Component <{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        
    }
    render(){

    return (
        <Routes>
            <Route path="/Home" element={<Home tema="purple lighten-4"/>} />
            <Route path="/" element={<Home tema="purple lighten-4"/>} />
            <Route path="/Clientes" element={<ListaCliente tema="purple lighten-4"/>} />
            <Route path="/Produtos" element={<FormularioCadastroCliente tema="purple lighten-4"/>} />
            
        </Routes> 
    );
    }
}


