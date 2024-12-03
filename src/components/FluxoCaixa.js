import React from 'react';
import './FluxoCaixa.css';

const FluxoCaixa = () => {
  return (
    <div className="fluxo-caixa-container">
      <h2>Fluxo de Caixa</h2>
      <div className="fluxo-item">
        <h3>Total a Pagar</h3>
        <p>R$ 500,00</p>
      </div>
      <div className="fluxo-item">
        <h3>Total a Receber</h3>
        <p>R$ 800,00</p>
      </div>
      <div className="fluxo-item">
        <h3>Diferença</h3>
        <p>R$ 300,00</p>
      </div>
      {/* Adicionar gráficos ou outras informações se necessário */}
    </div>
  );
};

export default FluxoCaixa;
