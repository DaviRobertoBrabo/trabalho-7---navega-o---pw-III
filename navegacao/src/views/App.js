import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Conteudo from '../components/layout/Conteudo';
import Menu from '../components/layout/Menu';

import './styles.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Menu />
        <Conteudo />
      </Router>
    </div>
  );
}

export default App;
