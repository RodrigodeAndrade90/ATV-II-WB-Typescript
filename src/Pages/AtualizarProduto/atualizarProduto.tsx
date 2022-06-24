/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

// LOCAL CSS
import './atualizarProduto.css';

type props = {
    tema: string
}

export default class atualizarProduto extends Component<props> {

    componentDidMount() {
        console.log(M);
        M.AutoInit();
    }

    render() {
        let estiloBotao = `btn waves-effect  pink accent-4  ${this.props.tema}`
        return (
            <div className="collections">
                <h1 className="">Atualização Produto</h1>
                <div className="col s12 z-depth-6 card-panel">
                                <form className="login-form">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="name_produto" type="text" className="validate" />
                                            <label htmlFor="name_produto">Nome do Produto</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input id="descricao_produto" type="text" className="validate" />
                                            <label htmlFor="descricao_produto">Descrição</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="input-field col s6 ">
                                            <input id="quantidade_produto" type="text" className="validate" />
                                            <label htmlFor="quantidade_produto">Quantidade</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="valor_produto" type="text" className="validate" />
                                            <label htmlFor="valor_produto">Valor</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col s12 center">
                                            <button className={estiloBotao} type="submit" name="action">Cadastrar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

            </div>





        )
    }
}