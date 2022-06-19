import { Component } from "react";
import FormularioCadastroCliente from "./Formulario/formularioCadastro";
import Home from "./Home/home";
import ListaCliente from "./Cliente/listaCliente";
import BarraNavegacao from "./Navegacao/barraNavegacao";
import ListaProduto from "./Produtos/listaProduto";
import ListaServico from "./Servicos/listaServico";
import Top from "./Top/top";


type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="pink accent-4" botoes={['Home','Clientes', 'Produtos', 'Serviços' ,'Cadastros', 'Top10']} />
        if (this.state.tela === 'Home') {
            return (
                <>
                    {barraNavegacao}
                    <Home tema="purple lighten-4" />
                </>
            )
        } if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="purple lighten-4" />
                </>
            )
        } if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="purple lighten-4" />
                </>
            )
        } if (this.state.tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="purple lighten-4" />
                </>
            )

        } if (this.state.tela === 'Cadastros') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            )
        }
        
        else {
            return (
                <>
                    {barraNavegacao}
                    <Top tema="purple lighten-4" />
                </>
            )
        }

    }
}