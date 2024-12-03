import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import FluxoCaixa from './components/FluxoCaixa';
import CRUD from './components/CRUD';
import './App.css';  // Importe o arquivo CSS aqui

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Sistema de Controle de Gastos</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/fluxocaixa" element={<FluxoCaixa />} />
          <Route path="/crud" element={<CRUD />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
