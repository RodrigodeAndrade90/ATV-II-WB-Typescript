/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

// LOCAL CSS
import './formulario.css';

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {

    componentDidMount() {
        console.log(M);
        M.AutoInit();
    }

    render() {
        let estiloBotao = `btn waves-effect  pink accent-4  ${this.props.tema}`
        return (
            <div className="collections">
                <h1 className="">Cadastro</h1>
                <ul className="collapsible popout">

                    <li>
                        <div className="collapsible-header">Cliente</div>
                        <div className="collapsible-body">

                            <div className="col s12 z-depth-6 card-panel">
                                <form className="login-form">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="name" type="text" className="validate" />
                                            <label htmlFor="name">Nome</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input id="social_name" type="text" className="validate" />
                                            <label htmlFor="social_name">Nome social</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="input-field col s6 ">
                                            <input id="fgenre" type="text" className="validate" />
                                            <label htmlFor="genre">Gênero</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="tel" type="text" className="validate" />
                                            <label htmlFor="tel">(DDD) Telefone</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="input-field col s6 ">
                                            <input id="cpf" type="text" className="validate" />
                                            <label htmlFor="cpf">CPF</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="emition_cpf" type="text" className="validate" />
                                            <label htmlFor="emition_cpf">Data de emissão CPF</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="input-field col s6 ">
                                            <input id="rg" type="text" className="validate" />
                                            <label htmlFor="rg">RG</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="emition_rg" type="text" className="validate" />
                                            <label htmlFor="emition_rg">Data de emissão RG</label>
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
                    </li>

                    <li>
                        <div className="collapsible-header">Produtos</div>
                        <div className="collapsible-body">

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
                    </li>

                    <li>
                        <div className="collapsible-header">Serviços</div>
                        <div className="collapsible-body">

                            <div className="col s12 z-depth-6 card-panel">
                                <form className="login-form">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="name_servico" type="text" className="validate" />
                                            <label htmlFor="name_servico">Nome do Serviço</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input id="descricao_servico" type="text" className="validate" />
                                            <label htmlFor="descricao_servico">Descrição</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="input-field col s6 ">
                                            <input id="quantidade_servico" type="text" className="validate" />
                                            <label htmlFor="quantidade_servico">Quantidade</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="valor_servico" type="text" className="validate" />
                                            <label htmlFor="valor_servico">Valor</label>
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
                    </li>

                </ul>

            </div>
        )
    }
}