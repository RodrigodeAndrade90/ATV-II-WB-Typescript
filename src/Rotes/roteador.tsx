import { Component } from "react";
import React from "react";
import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import BarraNavegacao from "../componentes/Navegacao/barraNavegacao";
import Home from "../Pages/Home/home";
import ListaCliente from "../Pages/Cliente/listaCliente";
import ListaProduto from "../Pages/Produtos/listaProduto";
import ListaServico from "../Pages/Servicos/listaServico";
import FormularioCadastro from "../Pages/Formulario/formularioCadastro";
import Top from "../Pages/Top/top";
import AtualizarCliente from "../Pages/AtualizarCliente/atualizarCliente";
import AtualizarProduto from "../Pages/AtualizarProduto/atualizarProduto";
import AtualizarServico from "../Pages/AtualizarServico/atualizarServico";



type state = {
    tela: string
}

function Routes() {
    return (
        <>
        <BarraNavegacao tema="pink accent-4" botoes={[{nome:'Home', rota: "/"},{ nome: 'Clientes', rota: "/cliente"}, {nome: 'Produtos', rota:"/produto"},{ nome: 'Servicos', rota: "/servico"}, { nome: 'Cadastros', rota: "/cadastro"}, { nome: 'Top 10', rota: "/top10"}]} seletorView={()=>{}} />
            <BrowserRouter>
                <Switch>
                    <Route path="/" element={<Home tema="purple lighten-4" />} />
                    <Route path="/home" element={<Home tema="purple lighten-4" />} />
                    <Route path="/cliente" element={<ListaCliente tema="purple lighten-4" />} />
                    <Route path="/produto" element={<ListaProduto tema="purple lighten-4" />} />
                    <Route path="/servico" element={<ListaServico tema="purple lighten-4" />} />
                    <Route path="/cadastro" element={<FormularioCadastro tema="purple lighten-4" />} />
                    <Route path="/top10" element={<Top tema="purple lighten-4" />} />
                    <Route path="/atualizarCliente" element={<AtualizarCliente tema="purple lighten-4" />} />
                    <Route path="/atualizarProduto" element={<AtualizarProduto tema="purple lighten-4" />} />
                    <Route path="/atualizarServico" element={<AtualizarServico tema="purple lighten-4" />} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes;