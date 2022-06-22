/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

// LOCAL CSS
import './lista.css';

type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
    
    componentDidMount(){
        console.log(M);
        M.AutoInit();
    }

    render() {
        let estilo = `collection-item active  pink lighten-2 ${this.props.tema}`
        return (
            <div className="collections">
             <h1 className="">Lista de Clientes</h1>
                <ul className="collapsible popout">

                    <li>
                        <div className="collapsible-header ">Cliente 1</div>
                        <div className="collapsible-body">
                            <div className="col s12 z-depth-6 card-panel">
                                <p><label>Nome:</label></p>
                                <p><label>Nome Social:</label></p>
                                <p><label>CPF:</label></p>
                                <p><label>RG:</label></p>
                                <p><label>Telefone:</label></p> 
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="collapsible-header ">Cliente 2</div>
                        <div className="collapsible-body">
                            <div className="col s12 z-depth-6 card-panel">
                                <p><label>Nome:</label></p>
                                <p><label>Nome Social:</label></p>
                                <p><label>CPF:</label></p>
                                <p><label>RG:</label></p>
                                <p><label>Telefone:</label></p> 
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="collapsible-header ">Cliente 3</div>
                        <div className="collapsible-body">
                            <div className="col s12 z-depth-6 card-panel">
                                <p><label>Nome:</label></p>
                                <p><label>Nome Social:</label></p>
                                <p><label>CPF:</label></p>
                                <p><label>RG:</label></p>
                                <p><label>Telefone:</label></p> 
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="collapsible-header ">Cliente 4</div>
                        <div className="collapsible-body">
                            <div className="col s12 z-depth-6 card-panel">
                                <p><label>Nome:</label></p>
                                <p><label>Nome Social:</label></p>
                                <p><label>CPF:</label></p>
                                <p><label>RG:</label></p>
                                <p><label>Telefone:</label></p> 
                            </div>
                        </div>
                    </li>
                        
                </ul>
            </div>
        )
    }
}