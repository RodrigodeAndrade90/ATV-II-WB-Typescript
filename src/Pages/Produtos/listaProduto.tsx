/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

// LOCAL CSS
import './listaProduto.css';
import { Link } from "react-router-dom";

type props = {
    tema: string
}

export default class ListaProduto extends Component<props> {
    
    componentDidMount(){
        console.log(M);
        M.AutoInit();
    }

    render() {
        let estilo = `collection-item active  pink lighten-2 ${this.props.tema}`
        let estiloBotao = `btn waves-effect  pink accent-4  ${this.props.tema}`
        return (
            <div className="collections">
             <h1 className="">Lista de Produtos</h1>
                <ul className="collapsible popout">

                    <li>
                        <div className="collapsible-header ">Produto 1</div>
                        <div className="collapsible-body">
                            <div className="col s12 z-depth-6 card-panel">
                                <p><label>Nome do Produto:</label> Gel</p>
                                <p><label>Descrição:</label> Gel para cabelo</p>
                                <p><label>Quantidade:</label> 2 </p>
                            </div>

                            <div className="row">
                                <div className="col s6 center">
                                    <Link to="/atualizarProduto"><button className={estiloBotao} type="submit" name="action">Atualizar
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
                        <div className="collapsible-header ">Produto 2</div>
                        <div className="collapsible-body">
                            <div className="col s12 z-depth-6 card-panel">
                            <p><label>Nome do Produto:</label></p>
                                <p><label>Descrição:</label></p>
                                <p><label>Tipo:</label></p>
                            </div>

                            <div className="row">
                                <div className="col s6 center">
                                    <Link to="/atualizarProduto"><button className={estiloBotao} type="submit" name="action">Atualizar
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
                        <div className="collapsible-header ">Produto 3</div>
                        <div className="collapsible-body">
                            <div className="col s12 z-depth-6 card-panel">
                            <p><label>Nome do Produto:</label></p>
                                <p><label>Descrição:</label></p>
                                <p><label>Tipo:</label></p>
                            </div>

                            <div className="row">
                                <div className="col s6 center">
                                    <Link to="/atualizarProduto"><button className={estiloBotao} type="submit" name="action">Atualizar
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
                        <div className="collapsible-header ">Produto 4</div>
                        <div className="collapsible-body">
                            <div className="col s12 z-depth-6 card-panel">
                            <p><label>Nome do Produto:</label></p>
                                <p><label>Descrição:</label></p>
                                <p><label>Tipo:</label></p>
                            </div>

                            <div className="row">
                                <div className="col s6 center">
                                    <Link to="/atualizarProduto"><button className={estiloBotao} type="submit" name="action">Atualizar
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