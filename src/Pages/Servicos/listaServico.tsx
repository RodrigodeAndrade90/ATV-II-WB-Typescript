/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

// LOCAL CSS
import './listaServico.css';
import { Link } from "react-router-dom";

type props = {
    tema: string
}

export default class ListaServico extends Component<props> {
    
    componentDidMount(){
        console.log(M);
        M.AutoInit();
    }

    render() {
        let estilo = `collection-item active  pink lighten-2 ${this.props.tema}`
        let estiloBotao = `btn waves-effect  pink accent-4  ${this.props.tema}`
        return (
            <div className="collections">
             <h1 className="">Lista de Serviços</h1>
                <ul className="collapsible popout">

                    <li>
                        <div className="collapsible-header ">Serviço 1</div>
                        <div className="collapsible-body">
                            <div className="col s12 z-depth-6 card-panel">
                                <p><label>Nome do Serviço:</label> Escova Progressiva</p>
                                <p><label>Descrição:</label> Cabelo Feminino</p>
                                <p><label>Quantidade:</label> 1</p>
                            </div>

                            <div className="row">
                                <div className="col s6 center">
                                    <Link to="/atualizarServico"><button className={estiloBotao} type="submit" name="action">Atualizar
                                    </button></Link>
                                </div>

                                <div className="col s6 center">
                                    <button className={estiloBotao} type="submit" name="action">Excluir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="collapsible-header ">Serviço 2</div>
                        <div className="collapsible-body">
                            <div className="col s12 z-depth-6 card-panel">
                                <p><label>Nome do Serviço:</label></p>
                                <p><label>Descrição:</label></p>
                                <p><label>Tipo:</label></p> 
                            </div>

                            <div className="row">
                                <div className="col s6 center">
                                    <Link to="/atualizarServico"><button className={estiloBotao} type="submit" name="action">Atualizar
                                    </button></Link>
                                </div>

                                <div className="col s6 center">
                                    <button className={estiloBotao} type="submit" name="action">Excluir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="collapsible-header ">Serviço 3</div>
                        <div className="collapsible-body">
                            <div className="col s12 z-depth-6 card-panel">
                                <p><label>Nome do Serviço:</label></p>
                                <p><label>Descrição:</label></p>
                                <p><label>Tipo:</label></p>
                            </div>

                            <div className="row">
                                <div className="col s6 center">
                                    <Link to="/atualizarServico"><button className={estiloBotao} type="submit" name="action">Atualizar
                                    </button></Link>
                                </div>

                                <div className="col s6 center">
                                    <button className={estiloBotao} type="submit" name="action">Excluir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="collapsible-header ">Serviço 4</div>
                        <div className="collapsible-body">
                            <div className="col s12 z-depth-6 card-panel">
                                <p><label>Nome do Serviço:</label></p>
                                <p><label>Descrição:</label></p>
                                <p><label>Tipo:</label></p>
                            </div>

                            <div className="row">
                                <div className="col s6 center">
                                    <Link to="/atualizarServico"><button className={estiloBotao} type="submit" name="action">Atualizar
                                    </button></Link>
                                </div>

                                <div className="col s6 center">
                                    <button className={estiloBotao} type="submit" name="action">Excluir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                        
                </ul>
            </div>
        )
    }
}