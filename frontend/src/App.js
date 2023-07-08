import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Inicio from './pages/inicio/inicio.js';

import BovinoHome from './pages/bovinos/bovinoHome.js';
import VacinaHome from './pages/vacinas/vacinaHome.js';
import PessoaHome from './pages/pessoas/pessoaHome.js';
import FazendaHome from './pages/fazendas/fazendaHome.js';

import CadastrarBovino from './pages/bovinos/cadastrarBovino.js';
import EditarBovino from './pages/bovinos/editarBovino.js';

import CadastrarVacina from './pages/vacinas/cadastrarVacinas.js';
import EditarVacina from './pages/vacinas/editarVacinas.js';
import ListarVacina from './pages/vacinas/listarVacinas.js';

import CadastrarPessoa from './pages/pessoas/cadastrarPessoas.js';
import EditarPessoa from './pages/pessoas/editarPessoas.js';
import ListarPessoa from './pages/pessoas/listarPessoas.js';

import CadastrarFazenda from './pages/fazendas/cadastrarFazenda.js';
import EditarFazenda from './pages/fazendas/editarFazenda.js';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/bovinos/bovinoHome" element={<BovinoHome />} />
        <Route path="/vacinas/vacinaHome" element={<VacinaHome />} />
        <Route path="/pessoas/pessoaHome" element={<PessoaHome />} />
        <Route path="/fazendas/fazendaHome" element={<FazendaHome />} />

        <Route path="/bovinos/cadastrarBovinos" element={<CadastrarBovino />} />
        <Route path="/bovinos/editarBovinos" element={<EditarBovino />} />

        <Route path="/vacinas/cadastrarVacinas" element={<CadastrarVacina />} />
        <Route path="/vacinas/editarVacinas" element={<EditarVacina />} />
        <Route path="/vacinas/listarVacinas" element={<ListarVacina />} />

        <Route path="/pessoas/cadastrarPessoas" element={<CadastrarPessoa />} />
        <Route path="/pessoas/editarPessoas" element={<EditarPessoa />} />
        <Route path="/pessoas/listarPessoas" element={<ListarPessoa />} />

        <Route path="/fazendas/cadastrarFazenda" element={<CadastrarFazenda />} />
        <Route path="/fazendas/editarFazenda" element={<EditarFazenda />} />

      </Routes>
    </Router>

  );
}

export default App;

