import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PrivateRoute from './pages/base/privateRoute.js';
import Inicio from './pages/inicio/inicio.js';

import CadastrarBovino from './pages/bovinos/cadastrarBovino.js';
import EditarBovino from './pages/bovinos/editarBovino.js';
import ListarBovino from './pages/bovinos/listarBovino.js';
import TelaListarCarteiraBovino from './pages/bovinos/telaListagemCarteira.js';
import CarteiraVacinacaoBovino from './pages/bovinos/carteiraVacinacao.js';

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

        <Route path="/bovinos" element={<PrivateRoute><ListarBovino /></PrivateRoute>} />
        <Route path="/bovinos/cadastrarBovino" element={<PrivateRoute><CadastrarBovino /></PrivateRoute>} />
        <Route path="/bovinos/editarBovino/:id" element={<PrivateRoute><EditarBovino /></PrivateRoute>} />
        <Route path="/bovinos/telaListagemCarteira" element={<TelaListarCarteiraBovino />} />
        <Route path="/bovinos/carteiraVacinacao" element={<CarteiraVacinacaoBovino />} />

        <Route path="/vacinas" element={<PrivateRoute><ListarVacina /></PrivateRoute>} />
        <Route path="/vacinas/cadastrarVacina" element={<PrivateRoute><CadastrarVacina /></PrivateRoute>} />
        <Route path="/vacinas/editarVacina" element={<PrivateRoute><EditarVacina /></PrivateRoute>} />

        <Route path="/pessoas" element={<PrivateRoute><ListarPessoa /></PrivateRoute>} />
        <Route path="/pessoas/cadastrarPessoa" element={<PrivateRoute><CadastrarPessoa /></PrivateRoute>} />
        <Route path="/pessoas/editarPessoa/:cpf" element={<PrivateRoute><EditarPessoa /></PrivateRoute>} />

        <Route path="/fazendas" element={<PrivateRoute><ListarFazenda /></PrivateRoute>} />
        <Route path="/fazendas/cadastrarFazenda" element={<PrivateRoute><CadastrarFazenda /></PrivateRoute>} />
        <Route path="/fazendas/editarFazenda/:id" element={<PrivateRoute><EditarFazenda /></PrivateRoute>} />

        <Route path="/ingredientes" element={<PrivateRoute><ListarIngrediente /></PrivateRoute>} />
        <Route path="/ingredientes/cadastrarIngrediente" element={<PrivateRoute><CadastrarIngrediente /></PrivateRoute>} />
        <Route path="/ingredientes/editarIngrediente/:id" element={<PrivateRoute><EditarIngrediente /></PrivateRoute>} />

        <Route path="/alimentacoes" element={<PrivateRoute><ListarAlimentacao /></PrivateRoute>} />
        <Route path="/alimentacoes/cadastrarAlimentacao" element={<PrivateRoute><CadastrarAlimentacao /></PrivateRoute>} />
        <Route path="/alimentacoes/editarAlimentacao" element={<PrivateRoute><EditarAlimentacao /></PrivateRoute>} />

        <Route path="/dietas" element={<PrivateRoute><ListarDieta /></PrivateRoute>} />
        <Route path="/dietas/cadastrarDieta" element={<PrivateRoute><CadastrarDieta /></PrivateRoute>} />
        <Route path="/dietas/editarDieta" element={<PrivateRoute><EditarDieta /></PrivateRoute>} />

        <Route path="/doses" element={<PrivateRoute><ListarDose /></PrivateRoute>} />
        <Route path="/doses/cadastrarDose" element={<PrivateRoute><CadastrarDose /></PrivateRoute>} />
        <Route path="/doses/editarDose" element={<PrivateRoute><EditarDose /></PrivateRoute>} />

      </Routes>
    </Router>

  );
}

export default App;

