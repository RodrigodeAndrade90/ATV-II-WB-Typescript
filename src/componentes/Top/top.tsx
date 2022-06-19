/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

// LOCAL CSS
import './top.css';

type props = {
    tema: string
}

export default class Top extends Component<props> {

    componentDidMount() {
        console.log(M);
        M.AutoInit();
    }

    render() {
        let estilo = `collection-item active  pink lighten-2 ${this.props.tema}`
        return (
            <div className="row">
                <h1 className="">Top 10</h1>

                <div className="top col s12">

                    <h2>Clientes</h2>
                    <div className="collections col s12 m12 l6 ">
                        <ul className="collapsible popout">

                            <li>
                                <div className="collapsible-header ">Masculino</div>
                                <div className="collapsible-body">
                                    <div className=" z-depth-6 card-panel">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Nome</th>
                                                    <th>E-mail</th>
                                                    <th>Telefone</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    
                                                </tr>
                                                <tr>
                                                    
                                                </tr>
                                                <tr>
                                                   
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className="collections col s12 m12 l6 ">
                        <ul className="collapsible popout">

                            <li>
                                <div className="collapsible-header ">Feminino</div>
                                <div className="collapsible-body">
                                    <div className=" z-depth-6 card-panel">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Nome</th>
                                                    <th>E-mail</th>
                                                    <th>Telefone</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    
                                                </tr>
                                                <tr>
                                                   
                                                </tr>
                                                <tr>
                                                    
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="top col s12">

                    <h2>Produtos</h2>
                    <div className="collections col s12 m12 l6 ">
                        <ul className="collapsible popout">

                            <li>
                                <div className="collapsible-header ">10 Clientes que mais consumiram</div>
                                <div className="collapsible-body">
                                    <div className="z-depth-6 card-panel">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Nome</th>
                                                    <th>Produto</th>
                                                    <th>Quantidade</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>

                                                </tr>
                                                <tr>

                                                </tr>
                                                <tr>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className="collections col s12 m12 l6 ">
                        <ul className="collapsible popout">

                            <li>
                                <div className="collapsible-header ">10 Clientes que menos consumiram</div>
                                <div className="collapsible-body">
                                    <div className="z-depth-6 card-panel">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Nome</th>
                                                    <th>Produto</th>
                                                    <th>Quantidade</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>

                                                </tr>
                                                <tr>

                                                </tr>
                                                <tr>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="top col s12">

                    <h2>Serviços</h2>
                    <div className="collections col s12 m12 l6 ">
                        <ul className="collapsible popout">

                            <li>
                                <div className="collapsible-header ">10 Clientes que mais pediram serviços</div>
                                <div className="collapsible-body">
                                    <div className="z-depth-6 card-panel">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Nome</th>
                                                    <th>Serviço</th>
                                                    <th>Quantidade</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>

                                                </tr>
                                                <tr>

                                                </tr>
                                                <tr>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className="collections col s12 m12 l6 ">
                        <ul className="collapsible popout">

                            <li>
                                <div className="collapsible-header ">10 Clientes que menos pediram serviços</div>
                                <div className="collapsible-body">
                                    <div className="z-depth-6 card-panel">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Nome</th>
                                                    <th>Serviço</th>
                                                    <th>Quantidade</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>

                                                </tr>
                                                <tr>

                                                </tr>
                                                <tr>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="top col s12">

                    <h2>Valores</h2>
                    <div className="collections col s12 m12 l6 ">
                        <ul className="collapsible popout">

                            <li>
                                <div className="collapsible-header ">10 Clientes que mais gastaram em produtos e serviços</div>
                                <div className="collapsible-body">
                                    <div className="z-depth-6 card-panel">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Nome</th>
                                                    <th>Valores</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>

                                                </tr>
                                                <tr>

                                                </tr>
                                                <tr>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className="collections col s12 m12 l6 ">
                        <ul className="collapsible popout">

                            <li>
                                <div className="collapsible-header ">10 Clientes que menos gastaram em produtos e serviços</div>
                                <div className="collapsible-body">
                                    <div className="z-depth-6 card-panel">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Nome</th>
                                                    <th>Valores</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>

                                                </tr>
                                                <tr>

                                                </tr>
                                                <tr>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}