import { Component } from "react";

// LOCAL CSS
import './formulario.css';


type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div id="login-page" className="row">
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
        )
    }
}