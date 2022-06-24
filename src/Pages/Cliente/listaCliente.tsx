/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

// LOCAL CSS
import './lista.css';
import { Link } from "react-router-dom";

type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {

    componentDidMount() {
        console.log(M);
        M.AutoInit();
    }

    render() {
        let estilo = `collection-item active  pink lighten-2 ${this.props.tema}`
        let estiloBotao = `btn waves-effect  pink accent-4  ${this.props.tema}`
        return (
            <div className="collections">
                <h1 className="">Lista de Clientes</h1>
                <ul className="collapsible popout">

                    <li>
                        <div className="collapsible-header ">Cliente 1</div>
                        <div className="collapsible-body">
                            <div className="col s12 z-depth-6 card-panel">
                                <p><label>Nome:</label> Rodrigo de Andrade</p>
                                <p><label>Nome Social:</label> Rodrigo</p>
                                <p><label>CPF:</label> 122.233.444-34</p>
                                <p><label>RG:</label> 33.654.334-54</p>
                                <p><label>Telefone:</label> (12)2030-4506</p>
                            </div>

                            <div className="row">
                                <div className="col s6 center">
                                    <Link to="/atualizarCliente"><button className={estiloBotao} type="submit" name="action">Atualizar
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
                        <div className="collapsible-header ">Cliente 2</div>
                        <div className="collapsible-body">
                            <div className="col s12 z-depth-6 card-panel">
                                <p><label>Nome:</label> Gizeli Martin Fonseca</p>
                                <p><label>Nome Social:</label> Gizeli</p>
                                <p><label>CPF:</label> 344.244.355-65</p>
                                <p><label>RG:</label> 45.544.446-4</p>
                                <p><label>Telefone:</label> (12)3546-3535</p>
                            </div>

                            <div className="row">
                                <div className="col s6 center">
                                    <Link to="/atualizarCliente"><button className={estiloBotao} type="submit" name="action">Atualizar
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
                        <div className="collapsible-header ">Cliente 3</div>
                        <div className="collapsible-body">
                            <div className="col s12 z-depth-6 card-panel">
                                <p><label>Nome:</label> Rikio Anzai</p>
                                <p><label>Nome Social:</label> Rikio</p>
                                <p><label>CPF:</label> 330.349.434.35</p>
                                <p><label>RG:</label> 33.455.456-65</p>
                                <p><label>Telefone:</label> (12)3845-4355</p>
                            </div>

                            <div className="row">
                                <div className="col s6 center">
                                    <Link to="/atualizarCliente"><button className={estiloBotao} type="submit" name="action">Atualizar
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
                        <div className="collapsible-header ">Cliente 4</div>
                        <div className="collapsible-body">
                            <div className="col s12 z-depth-6 card-panel">
                                <p><label>Nome:</label> Ana Maria Farias</p>
                                <p><label>Nome Social:</label> Ana</p>
                                <p><label>CPF:</label> 24.544.344.56</p>
                                <p><label>RG:</label> 20.344.453.78</p>
                                <p><label>Telefone:</label> (12)3094-4994</p>
                            </div>

                            <div className="row">
                                <div className="col s6 center">
                                    <Link to="/atualizarCliente"><button className={estiloBotao} type="submit" name="action">Atualizar
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