import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PrivateRoute from './pages/base/privateRoute.js';
import Inicio from './pages/inicio/inicio.js';
import BovinoHome from './pages/bovinos/bovinoHome.js';
import VacinaHome from './pages/vacinas/vacinaHome.js';
import PessoaHome from './pages/pessoas/pessoaHome.js';
import FazendaHome from './pages/fazendas/fazendaHome.js';
import IngredienteHome from './pages/ingredientes/ingredienteHome.js';
import AlimentacaoHome from './pages/alimentacao/alimentacaoHome.js';
import DietaHome from './pages/dieta/dietaHome.js';
import DoseHome from './pages/dose/doseHome.js';

import CadastrarBovino from './pages/bovinos/cadastrarBovino.js';
import EditarBovino from './pages/bovinos/editarBovino.js';
import ListarBovino from './pages/bovinos/listarBovino.js';

import CadastrarVacina from './pages/vacinas/cadastrarVacinas.js';
import EditarVacina from './pages/vacinas/editarVacinas.js';
import ListarVacina from './pages/vacinas/listarVacinas.js';

import CadastrarPessoa from './pages/pessoas/cadastrarPessoas.js';
import EditarPessoa from './pages/pessoas/editarPessoas.js';
import ListarPessoa from './pages/pessoas/listarPessoas.js';
import LoginPessoa from './pages/pessoas/loginPessoa.js';

import CadastrarFazenda from './pages/fazendas/cadastrarFazenda.js';
import EditarFazenda from './pages/fazendas/editarFazenda.js';
import ListarFazenda from './pages/fazendas/listarFazenda.js';

import CadastrarIngrediente from './pages/ingredientes/cadastrarIngrediente.js';
import EditarIngrediente from './pages/ingredientes/editarIngrediente.js';
import ListarIngrediente from './pages/ingredientes/listarIngrediente.js';

import CadastrarAlimentacao from './pages/alimentacao/cadastrarAlimentacao.js';
import EditarAlimentacao from './pages/alimentacao/editarAlimentacao.js';
import ListarAlimentacao from './pages/alimentacao/listarAlimentacao.js';

import CadastrarDieta from './pages/dieta/cadastrarDieta.js';
import EditarDieta from './pages/dieta/editarDieta.js';
import ListarDieta from './pages/dieta/listarDieta.js';

import CadastrarDose from './pages/dose/cadastrarDose.js';
import EditarDose from './pages/dose/editarDose.js';
import ListarDose from './pages/dose/listarDose.js';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute><Inicio /></PrivateRoute>} />
        <Route path="/login" element={<LoginPessoa />} />
        <Route path="/bovinos/bovinoHome" element={<PrivateRoute><BovinoHome /></PrivateRoute>} />
        <Route path="/vacinas/vacinaHome" element={<PrivateRoute><VacinaHome /></PrivateRoute>} />
        <Route path="/pessoas/pessoaHome" element={<PessoaHome />} />
        <Route path="/fazendas/fazendaHome" element={<FazendaHome />} />
        <Route path="/ingredientes/ingredienteHome" element={<IngredienteHome />} />
        <Route path="/alimentacao/alimentacaoHome" element={<AlimentacaoHome />} />
        <Route path="/dieta/dietaHome" element={<DietaHome />} />
        <Route path="/dose/doseHome" element={<DoseHome />} />

        <Route path="/bovinos/cadastrarBovino" element={<CadastrarBovino />} />
        <Route path="/bovinos/editarBovino" element={<EditarBovino />} />
        <Route path="/bovinos/listarBovino" element={<ListarBovino />} />

        <Route path="/vacinas/cadastrarVacinas" element={<CadastrarVacina />} />
        <Route path="/vacinas/editarVacinas" element={<EditarVacina />} />
        <Route path="/vacinas/listarVacinas" element={<ListarVacina />} />

        <Route path="/pessoas/cadastrarPessoas" element={<CadastrarPessoa />} />
        <Route path="/pessoas/editarPessoas" element={<EditarPessoa />} />
        <Route path="/pessoas/listarPessoas" element={<ListarPessoa />} />
        <Route path="/pessoas/loginPessoa" element={<LoginPessoa />} />

        <Route path="/fazendas/cadastrarFazenda" element={<CadastrarFazenda />} />
        <Route path="/fazendas/listarFazenda" element={<ListarFazenda />} />
        <Route path="/fazendas/editarFazenda/:id" element={<EditarFazenda />} />



        <Route path="/ingredientes/cadastrarIngrediente" element={<CadastrarIngrediente />} />
        <Route path="/ingredientes/editarIngrediente" element={<EditarIngrediente />} />
        <Route path="/ingredientes/listarIngrediente" element={<ListarIngrediente />} />

        <Route path="/alimentacao/cadastrarAlimentacao" element={<CadastrarAlimentacao />} />
        <Route path="/alimentacao/editarAlimentacao" element={<EditarAlimentacao />} />
        <Route path="/alimentacao/listarAlimentacao" element={<ListarAlimentacao />} />

        <Route path="/dieta/cadastrarDieta" element={<CadastrarDieta />} />
        <Route path="/dieta/editarDieta" element={<EditarDieta />} />
        <Route path="/dieta/listarDieta" element={<ListarDieta />} />

        <Route path="/dose/cadastrarDose" element={<CadastrarDose />} />
        <Route path="/dose/editarDose" element={<EditarDose />} />
        <Route path="/dose/listarDose" element={<ListarDose />} />

      </Routes>
    </Router>

  );
}

export default App;

