import React from 'react';
import Header from './components/Header';
import CalculatorType from './components/CalculatorType';

import './App.scss';

function App() {
   return (
    <div>
      <Header />
      <div className="app container py-3">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6">
            <CalculatorType cardHeader="Empleado por Planilla" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
