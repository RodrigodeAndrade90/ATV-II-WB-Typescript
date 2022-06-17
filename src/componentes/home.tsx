/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

// IMAGE
import Salao from "../assets/img/salao.jpg"


type props = {
    tema: string
}

export default class Home extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="row">
                <div className="col s12 m12 l6">
                    <div className="teste1">
                        <img className="logo1" src={Salao} width={600} />
                    </div>
                </div>




                <div className="col s12 m12 l6">
                    <div className="teste2">
                        <h1>Seja Bem Vindo ao Salão WB</h1>
                        <h2>Aqui você pode ter uma administração conjunta de clientes, produtos e serviços, num só site</h2>

                    </div>
                </div>
            </div>
        )
    }
}