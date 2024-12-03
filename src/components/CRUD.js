import React, { useState } from 'react';
import './CRUD.css';

const CRUD = () => {
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para adicionar ou editar débitos/créditos
  };

  return (
    <div className="crud-container">
      <h2>CRUD de Débitos e Créditos</h2>
      <form onSubmit={handleSubmit}>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="">Selecione Tipo</option>
          <option value="pagar">A Pagar</option>
          <option value="receber">A Receber</option>
        </select>
        <input 
          type="text" 
          placeholder="Descrição" 
          value={descricao} 
          onChange={(e) => setDescricao(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Valor" 
          value={valor} 
          onChange={(e) => setValor(e.target.value)} 
        />
        <button type="submit">Salvar</button>
      </form>
      <div className="crud-list">
        {/* Lista de Débitos e Créditos */}
      </div>
    </div>
  );
};

export default CRUD;
