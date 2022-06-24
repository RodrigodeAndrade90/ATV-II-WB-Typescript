/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

// LOCAL CSS
import './atualizarCliente.css';

type props = {
    tema: string
}

export default class AtualizarCliente extends Component<props> {

    componentDidMount() {
        console.log(M);
        M.AutoInit();
    }

    render() {
        let estiloBotao = `btn waves-effect  pink accent-4  ${this.props.tema}`
        return (
            <div className="collections">
                <h1 className="">Atualização Cliente</h1>
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
                                <button className={estiloBotao} type="submit" name="action">Atualizar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>





        )
    }
}